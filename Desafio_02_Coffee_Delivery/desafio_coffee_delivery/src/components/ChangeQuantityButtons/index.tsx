import { Minus, Plus } from 'phosphor-react'
import { QuantityButtons } from './styles'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrdersContext'
import { OrderType } from '../../reducers/orders/reducer'

type ChangeQuantityButtonsType = {
  cardId: string
  flag?: string | undefined
  orderCart?: OrderType | undefined
}

export function ChangeQuantityButtons({
  cardId,
  orderCart,
  flag,
}: ChangeQuantityButtonsType) {
  const { handleQuantityItens, quantityItem } = useContext(OrderContext)

  // Use quantityItem apenas para o card específico
  const cardQuantity = cardId ? quantityItem[cardId] || 0 : 0

  return (
    <QuantityButtons>
      <button
        onClick={() => handleQuantityItens('minus', cardId, orderCart, flag)}
        disabled={cardQuantity <= 0}
      >
        <Minus size={14} weight="bold" />
      </button>

      <span>{cardQuantity} </span>

      <button
        onClick={() => handleQuantityItens('plus', cardId, orderCart, flag)}
      >
        <Plus size={14} weight="bold" />
      </button>
    </QuantityButtons>
  )
}
