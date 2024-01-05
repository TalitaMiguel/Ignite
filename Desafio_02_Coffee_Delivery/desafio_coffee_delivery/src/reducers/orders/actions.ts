import { CheckoutCartType, Order } from './reducer'

export enum ActionTypes {
  ADD_ITENS = 'ADD_ITENS',
  UPDATE_ORDER = 'UPDATE_ORDER',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

export function addNewOrderAction(newOrder: Order) {
  return {
    type: ActionTypes.ADD_ITENS,
    payload: {
      newOrder,
    },
  }
}

export function updateOrderAction(
  existingOrderIndex: number,
  quantity: number,
) {
  return {
    type: ActionTypes.UPDATE_ORDER,
    payload: {
      existingOrderIndex,
      quantity,
    },
  }
}

export function removeOrderAction(id: number) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      id,
    },
  }
}

export function checkoutCartAction(newOrder: CheckoutCartType) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      newOrder,
    },
  }
}
