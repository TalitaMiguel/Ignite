import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  CheckoutCartType,
  Order,
  OrderType,
  OrdersReducers,
} from '../reducers/orders/reducer'
import {
  addNewOrderAction,
  updateOrderAction,
  removeOrderAction,
  checkoutCartAction,
} from '../reducers/orders/actions'

interface OrderContextType {
  orders: Order[]
  quantityItem: { [cardId: string]: number }
  handleCreateNewOrder: (data: OrderType, quantity: number) => void
  handleQuantityItens: (
    type: string,
    cardId: string,
    orderCart: OrderType | undefined,
    flag: string | undefined,
  ) => void
  handleRemoveItemCart: (id: string) => void
  handleCheckoutCart: (data: CheckoutCartType) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrdersContextProviderProps {
  // ReactNode - é qualquer html ou jsx válido
  children: ReactNode
}

export function OrdersContextProvider({
  children,
}: OrdersContextProviderProps) {
  const [ordersState, dispatch] = useReducer(
    OrdersReducers,
    {
      orders: [],
      checkout: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:orders-state',
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
      return initialState
    },
  )

  const { orders } = ordersState

  const [quantityItem, setQuantityItem] = useState<{
    [cardId: string]: number
  }>(() => {
    // recupera o valor armazenado no localStorage
    const storedQuantityItem = localStorage.getItem(
      '@coffee-delivery:quantity-item',
    )

    /* Se esse valor existir, é parseado como JSON e usado
     * como valor inicial para quantityItem. Caso contrário,
     *quantityItem é inicializado como um objeto vazio {}
     */
    return storedQuantityItem ? JSON.parse(storedQuantityItem) : {}
  })

  function handleQuantityItens(
    type: string,
    cardId: string,
    orderCart: OrderType | undefined,
    flag: string | undefined,
  ) {
    setQuantityItem((state) => {
      // Crie um novo objeto para manter a imutabilidade
      const newQuantityItem = { ...state }
      const currentQuantity = newQuantityItem[cardId] || 0

      // Atualize a quantidade apenas para o card específico
      newQuantityItem[cardId] =
        type === 'minus'
          ? Math.max(0, currentQuantity - 1)
          : currentQuantity + 1

      /* se a atualização da quantidade origina-se da página Cart chama a
       *função handleCreateNewOrder para atualizar a quantidade na lista orders
       */
      if (flag === 'cart') {
        if (orderCart) {
          handleCreateNewOrder(orderCart, newQuantityItem[cardId])
        }
      }

      // Salva o novo valor no localStorage
      localStorage.setItem(
        '@coffee-delivery:quantity-item',
        JSON.stringify(newQuantityItem),
      )

      return newQuantityItem
    })
  }

  function handleCreateNewOrder(data: OrderType, quantity: number) {
    // Cria um novo pedido
    const newOrder: Order = {
      id: String(new Date().getTime()),
      coffee: data,
      quantity,
    }

    // Se a quantidade for igual a zero não adiciona o pedido
    if (quantity === 0) return

    // Procura por um pedido existente com o mesmo id
    const existingOrderIndex = orders.findIndex(
      (existingOrder) => existingOrder.coffee.id === data.id,
    )

    if (existingOrderIndex !== -1) {
      // Se o pedido já existe, atualize a propriedade quantity
      dispatch(updateOrderAction(existingOrderIndex, quantity))
    } else {
      // Se o pedido não existe, adicione o novo pedido
      dispatch(addNewOrderAction(newOrder))
    }
  }

  function handleRemoveItemCart(id: string) {
    dispatch(removeOrderAction(Number(id)))
  }

  function handleCheckoutCart(data: CheckoutCartType) {
    dispatch(checkoutCartAction(data))
  }

  useEffect(() => {
    const stateJson = JSON.stringify(ordersState)
    localStorage.setItem('@coffee-delivery:orders-state', stateJson)
  }, [ordersState])

  return (
    <OrderContext.Provider
      value={{
        handleCreateNewOrder,
        orders,
        handleQuantityItens,
        quantityItem,
        handleRemoveItemCart,
        handleCheckoutCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
