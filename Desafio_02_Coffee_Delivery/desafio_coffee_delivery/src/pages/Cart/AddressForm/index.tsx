import { FieldValues, useFormContext } from 'react-hook-form'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  AddresInputCEP,
  AddresInputs,
  Card,
  CartTitle,
  MessageErrors,
  TypePaymentContainer,
  TypePaymentDiv,
} from './styles'

export interface PaymentMethodType {
  isActive?: boolean
}

export function AddressForm() {
  const {
    watch,
    register,
    setValue,
    formState: { errors },
  } = useFormContext<FieldValues>()

  const selectedPaymentMethod = watch('paymentMethod')
  const cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement

    // Apenas números são válidos
    const validCEP = target.value.replace(/[^0-9]/g, '')

    // Validação do tamanho da variavel ValidCep
    const newCepValue = validCEP.length === 8 ? validCEP : ''

    setValue('cep', newCepValue)
  }

  return (
    <>
      <Card>
        <CartTitle>
          <MapPinLine size={22} color="#C47F17" />

          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </CartTitle>

        <AddresInputCEP
          id="cep"
          mask={cepMask}
          type="text"
          placeholder="CEP"
          style={{ width: '40%' }}
          {...register('cep', {
            // Registra a função onChange no react-hook-form, porque o MaskedInput já usa o onChange.
            onChange: (e) => handleCepChange(e),
          })}
        />
        {errors.cep && (
          <MessageErrors>
            {typeof errors.cep === 'string' ? '' : String(errors.cep.message)}
          </MessageErrors>
        )}
        <br />
        <AddresInputs
          type="text"
          placeholder="Rua"
          style={{ width: '100%' }}
          {...register('street')}
        />
        {errors.street && (
          <MessageErrors>
            {typeof errors.street === 'string'
              ? ''
              : String(errors.street.message)}
          </MessageErrors>
        )}
        <AddresInputs
          type="number"
          placeholder="Número"
          style={{ width: '40%' }}
          {...register('number', { valueAsNumber: true })}
        />
        {errors.number && (
          <MessageErrors>
            {typeof errors.number === 'string'
              ? ''
              : String(errors.number.message)}
          </MessageErrors>
        )}
        <AddresInputs
          type="text"
          placeholder="Complemento"
          style={{ width: '58%' }}
          {...register('complement')}
        />
        <AddresInputs
          type="text"
          placeholder="Bairro"
          style={{ width: '40%' }}
          {...register('neighborhood')}
        />
        {errors.neighborhood && (
          <MessageErrors>
            {typeof errors.neighborhood === 'string'
              ? ''
              : String(errors.neighborhood.message)}
          </MessageErrors>
        )}
        <AddresInputs
          type="text"
          placeholder="Cidade"
          style={{ width: '46%' }}
          {...register('city')}
        />
        {errors.city && (
          <MessageErrors>
            {typeof errors.city === 'string' ? '' : String(errors.city.message)}
          </MessageErrors>
        )}
        <AddresInputs
          type="text"
          placeholder="UF"
          maxLength={2}
          pattern="[A-Za-z]+"
          style={{ width: '10%' }}
          {...register('state')}
        />
        {errors.state && (
          <MessageErrors>
            {typeof errors.state === 'string'
              ? ''
              : String(errors.state.message)}
          </MessageErrors>
        )}
      </Card>

      <Card>
        <CartTitle>
          <CurrencyDollar size={22} color="#4B2995" />
          <div>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </CartTitle>
        <TypePaymentContainer>
          <TypePaymentDiv isActive={selectedPaymentMethod === 'credit'}>
            <input
              id={'credit'}
              type="radio"
              checked={selectedPaymentMethod === 'credit'}
              {...register('paymentMethod')}
              value="credit"
            />
            <label htmlFor={'credit'}>
              <span>
                <CreditCard size={16} />
                Cartão de crédito
              </span>
            </label>
          </TypePaymentDiv>

          <TypePaymentDiv isActive={selectedPaymentMethod === 'debit'}>
            <input
              id={'debit'}
              type="radio"
              checked={selectedPaymentMethod === 'debit'}
              {...register('paymentMethod')}
              value="debit"
            />
            <label htmlFor={'debit'}>
              <span>
                <Bank size={14} />
                Cartão de débito
              </span>
            </label>
          </TypePaymentDiv>

          <TypePaymentDiv isActive={selectedPaymentMethod === 'cash'}>
            <input
              id={'cash'}
              type="radio"
              checked={selectedPaymentMethod === 'cash'}
              {...register('paymentMethod')}
              value="cash"
            />
            <label htmlFor={'cash'}>
              <span>
                <Money size={14} />
                Dinheiro
              </span>
            </label>
          </TypePaymentDiv>
        </TypePaymentContainer>
        {errors.paymentMethod && (
          <MessageErrors>
            {typeof errors.paymentMethod === 'string'
              ? ''
              : String(errors.paymentMethod.message)}
          </MessageErrors>
        )}
      </Card>
    </>
  )
}
