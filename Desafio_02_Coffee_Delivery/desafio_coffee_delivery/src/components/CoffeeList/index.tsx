import { ShoppingCartSimple } from 'phosphor-react'
import { AddCartButton, Card, CardDetails, CardInfo } from './styles'
import { useContext } from 'react'
import { ChangeQuantityButtons } from '../ChangeQuantityButtons'
import { OrderContext } from '../../contexts/OrdersContext'
import { OrderType } from '../../reducers/orders/reducer'
import { ToastContainer, toast } from 'react-toastify'

interface CoffeeTypes {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function CoffeeList({ coffee }: CoffeeTypes) {
  const { handleCreateNewOrder, quantityItem } = useContext(OrderContext)

  function submitNewOrder(coffee: OrderType, quantity: number) {
    handleCreateNewOrder(coffee, quantity)

    toast.success('Pedido adicionado ao carrinho!', {
      position: 'top-right',
      autoClose: 3000, // Fecha automaticamente após 3 segundos
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }

  return (
    <Card key={coffee.id}>
      <CardInfo>
        <img src={coffee.image} alt="" />
        <span>
          {coffee.tags.map((tag: string) => {
            return tag
          })}
        </span>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
      </CardInfo>
      <CardDetails>
        <p>
          <small>R$</small> {coffee.price.toFixed(2).replace('.', ',')}
        </p>
        <section>
          <ChangeQuantityButtons
            cardId={coffee.id}
            orderCart={coffee}
            flag={'home'}
          />
          <AddCartButton
            onClick={() => submitNewOrder(coffee, quantityItem[coffee.id] || 0)}
            disabled={(quantityItem[coffee.id] || 0) <= 0}
          >
            <ShoppingCartSimple size={24} weight="fill" />
          </AddCartButton>
        </section>
      </CardDetails>
      <ToastContainer />
    </Card>
  )
}
