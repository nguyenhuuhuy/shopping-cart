import * as types from "../constants/actionType"
export const act_buy_product = (product, quantity) => {

    return {
        type: types.BUY_PRODUCT,
        payload: { product, quantity }
    }
}

export const act_change_notify = (message) => {
    return {
        type: types.CHANGE_NOTIFY,
        payload: message
    }
}

export const act_update_cart = (productId, quantity) => {
    return {
        type: types.UPDATE_CART,
        payload: { productId, quantity }
    }
}

export const act_delete_cart = (productId) => {
    return {
        type: types.DELETE_CART,
        payload:productId
    }
}