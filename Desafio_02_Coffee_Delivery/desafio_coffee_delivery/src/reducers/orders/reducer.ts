import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface OrderType {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

export interface Order {
  id: string
  coffee: OrderType
  quantity: number
}

export interface CheckoutCartType {
  id: number
  items: {
    number: number
    cep: string
    street: string
    neighborhood: string
    city: string
    state: string
    paymentMethod: 'credit' | 'debit' | 'cash'
    complement?: string | undefined
  }
}

interface OrdersState {
  orders: Order[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function OrdersReducers(state: OrdersState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITENS:
      return produce(state, (draft) => {
        draft.orders.push(action.payload.newOrder)
      })

    case ActionTypes.UPDATE_ORDER: {
      const { existingOrderIndex, quantity } = action.payload

      // Cria uma cópia do array de pedidos
      const updatedOrders = [...state.orders]

      // Atualiza a propriedade quantity do pedido existente
      updatedOrders[existingOrderIndex] = {
        ...updatedOrders[existingOrderIndex],
        quantity,
      }

      // Retorna o objeto atualizado
      return {
        ...state,
        orders: updatedOrders,
      }
    }
    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        const itemToRemoveId = draft.orders.findIndex(
          (item) => item.id === action.payload.itemId,
        )

        draft.orders.splice(itemToRemoveId, 1)
      })
    case ActionTypes.CHECKOUT_CART: {
      const newOrder = action.payload
      const updatedOrders = [...state.orders]

      // Salvar no localStorage
      localStorage.setItem(
        '@coffee-delivery:orders-state',
        JSON.stringify({ orders: updatedOrders, checkout: newOrder }),
      )

      return {
        ...state,
        orders: updatedOrders,
        checkout: newOrder,
      }
    }

    default:
      return state
  }
}
