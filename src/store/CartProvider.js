import React, { useReducer } from 'react'
import CartContext from "./cart-contex";

const defaultState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedItems = state.items.concat(action.item);

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultState;
}


const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState)
    const addItemToCartHandler = item => {
        dispatchCartAction({ type: "ADD", item: item })
    };
    const removeItemFromCartHandler = id => {
        dispatchCartAction({ type: "REMOVE", id: id })
    };

    const cartContex = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }
    return <CartContext.Provider value={cartContex}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;