import { CountTotalItens, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import Logo from '../../assets/Logo.png'
import { OrderContext } from '../../contexts/OrdersContext'

export function Header() {
  const { orders } = useContext(OrderContext)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [locationInfo, setLocationInfo] = useState<{
    city: string
    state: string
  } | null>(null)

  const quantityOfOrders = orders.filter((valor) => valor.quantity !== 0)

  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:orders-state',
    )
    if (storedStateAsJSON) {
      const storedState = JSON.parse(storedStateAsJSON)
      const latestOrder = storedState.checkout

      if (latestOrder && latestOrder.newOrder) {
        setLocationInfo({
          city: latestOrder?.newOrder?.items.city,
          state: latestOrder?.newOrder?.items.state,
        })
      }
    }
  }, [orders])

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} alt="" />
      </NavLink>

      <nav>
        <NavLink to="/cart" title="Endereço">
          <MapPin size={24} weight="fill" />
          <span>
            {locationInfo ? locationInfo?.city : ''}
            {locationInfo ? `, ${locationInfo?.state}` : ''}
          </span>
        </NavLink>
        <NavLink to="/cart" title="Carrinho">
          <ShoppingCart size={24} weight="fill" />
          <CountTotalItens
            data-count={String(quantityOfOrders.length)}
          ></CountTotalItens>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
