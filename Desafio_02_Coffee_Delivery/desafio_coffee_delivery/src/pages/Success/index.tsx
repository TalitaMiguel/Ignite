import { CurrencyDollar, MapPin, Package } from 'phosphor-react'
import {
  SuccessContainer,
  SuccessWrapper,
  Title,
  ListBackground,
  ListContainer,
  List,
  ListText,
  BackgroundIcons,
} from './styles'
import Motorcycle from '../../assets/moto.png'

export function Success() {
  const storedCheckoutItems = localStorage.getItem(
    '@coffee-delivery:orders-state',
  )
  const locationInfo = storedCheckoutItems
    ? JSON.parse(storedCheckoutItems)
    : null

  // Verifica se locationInfo e locationInfo.items existem antes de acessá-los
  const itemsData = locationInfo?.checkout?.newOrder?.items

  function checkedPaymentMethod(method: string) {
    switch (method) {
      case 'credit':
        return 'Cartão de crédito'
      case 'debit':
        return 'Cartão de débito'
      case 'cash':
        return 'Dinheiro'
      default:
        return 'Erro na identificação do pagamento'
    }
  }

  return (
    <SuccessContainer>
      <Title>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Title>

      <SuccessWrapper>
        <ListBackground>
          <ListContainer>
            <List>
              <BackgroundIcons color={'purple'}>
                <MapPin size={16} weight="fill" />
              </BackgroundIcons>
              <ListText>
                <span>
                  Entrega em{' '}
                  <strong>
                    {itemsData.street}, {itemsData.number}
                  </strong>
                </span>
                <span>
                  {itemsData.neighborhood} - {itemsData.city}, {itemsData.state}
                </span>
              </ListText>
            </List>

            <List>
              <BackgroundIcons color={'yellow'}>
                <Package size={16} weight="fill" />
              </BackgroundIcons>
              <ListText>
                <span>Previsão de entrega</span>
                <strong> 20 min - 30 min</strong>
              </ListText>
            </List>

            <List>
              <BackgroundIcons color={'yellow-dark'}>
                <CurrencyDollar size={16} weight="fill" />
              </BackgroundIcons>
              <ListText>
                <span>Pagamento na entrega</span>
                <strong>{checkedPaymentMethod(itemsData.paymentMethod)}</strong>
              </ListText>
            </List>
          </ListContainer>
        </ListBackground>
        <aside>
          <img src={Motorcycle} alt="" srcSet="" />
        </aside>
      </SuccessWrapper>
    </SuccessContainer>
  )
}
