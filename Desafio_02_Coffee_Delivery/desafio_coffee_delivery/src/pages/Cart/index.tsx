import { AddressForm } from './AddressForm'
import { Trash } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { Fragment, useCallback, useContext, useEffect } from 'react'
import { ChangeQuantityButtons } from '../../components/ChangeQuantityButtons'
import { OrderContext } from '../../contexts/OrdersContext'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import {
  ButtonsCoffeeAddedCart,
  CartContainer,
  CoffeeAddedCart,
  CoffeeItem,
  FinalizeOrder,
  FormContainer,
  InfoCoffeeAddedCart,
  Order,
  PriceCoffeeAddedCart,
  SelectedCoffeesContainer,
  SelectedCoffeesWrapper,
  TotalOrder,
} from './styles'

const newAddressFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.number().min(1, 'Informe o número'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe o método de pagamento',
  }),
})

type newAddressFormData = zod.infer<typeof newAddressFormValidationSchema>

export function Cart() {
  const navigate = useNavigate()

  const { orders, quantityItem, handleRemoveItemCart, handleCheckoutCart } =
    useContext(OrderContext)

  const newOrderForm = useForm<newAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      city: '',
      complement: '',
      neighborhood: '',
      state: '',
    },
  })

  const { handleSubmit, watch } = newOrderForm

  const zipCode = watch('cep')

  const shippingPrice: number = 12.5

  function submitCheckoutCart(data: newAddressFormData) {
    const newOrder = {
      id: new Date().getTime(),
      items: data,
      orders,
    }

    // Cria uma nova ordem
    handleCheckoutCart(newOrder)

    // Alert com mensagem se sucesso
    toast.success('Pedido realizado!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })

    // Esperar 4 segundos antes de navegar para outra página
    setTimeout(() => {
      // Navegar para outra página
      navigate(`/order/${newOrder.id}/success`)
    }, 4000)
  }

  /**
   * O useCallback é útil quando você tem *funções* que são passadas
   * como dependências para hooks, como o useEffect. Ele ajuda a
   * evitar recriações desnecessárias de funções e pode melhorar
   * o desempenho do seu componente, especialmente em casos onde
   * muitas renderizações ocorrem.
   */

  const sumTotalPrice = useCallback(() => {
    let total: number = 0

    orders?.forEach((item) => {
      total += item?.coffee?.price * item?.quantity || 0
    })

    return total
  }, [orders])

  const totalPrice = sumTotalPrice() + shippingPrice

  useEffect(() => {
    sumTotalPrice()
  }, [quantityItem, orders, sumTotalPrice])

  return (
    <CartContainer>
      <Order>
        <h2>Complete seu pedido</h2>
        <FormContainer
          id="order"
          onSubmit={handleSubmit(submitCheckoutCart)}
          action=""
        >
          <FormProvider {...newOrderForm}>
            <AddressForm />
          </FormProvider>
        </FormContainer>
      </Order>

      <SelectedCoffeesContainer>
        <h2>Cafés selecionados</h2>

        <SelectedCoffeesWrapper>
          {orders?.map((order, index) => {
            return (
              <Fragment key={index}>
                <CoffeeItem>
                  <CoffeeAddedCart>
                    <img src={order?.coffee?.image} alt="" />

                    <InfoCoffeeAddedCart>
                      <h3>{order?.coffee?.title}</h3>

                      <ButtonsCoffeeAddedCart>
                        <ChangeQuantityButtons
                          cardId={order?.coffee?.id}
                          orderCart={order.coffee}
                          flag={'cart'}
                        />

                        <button
                          onClick={() =>
                            handleRemoveItemCart(order?.coffee?.id)
                          }
                        >
                          <Trash size={14} />
                          Remover
                        </button>
                      </ButtonsCoffeeAddedCart>
                    </InfoCoffeeAddedCart>
                  </CoffeeAddedCart>

                  <PriceCoffeeAddedCart>
                    <span>R$ {order?.coffee?.price.toFixed(2)}</span>
                  </PriceCoffeeAddedCart>
                </CoffeeItem>
                <hr color="#E6E5E5" />
              </Fragment>
            )
          })}

          <FinalizeOrder>
            <div>
              <span>Total de Itens</span>
              <p>R$ {sumTotalPrice().toFixed(2)}</p>
            </div>

            <div>
              <span>Entrega</span>
              <p>R$ {shippingPrice.toFixed(2)}</p>
            </div>

            <TotalOrder>
              <span>Total</span>
              <p>R$ {totalPrice.toFixed(2)}</p>
            </TotalOrder>

            <button type="submit" form="order" disabled={!zipCode}>
              Confirmar Pedido
            </button>
          </FinalizeOrder>
        </SelectedCoffeesWrapper>
      </SelectedCoffeesContainer>

      <ToastContainer />
    </CartContainer>
  )
}
