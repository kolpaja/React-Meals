import React from 'react'
import classes from './Cart.module.css';
import Modal from '../UI/Modal/Modal'

function Cart(props) {
    const cartItems = <ul className={classes["cart-items"]}>{[{
        id: "c1",
        name: "byrek me gjize",
        amount: "2",
        price: 60,
    }].map(item => <li>{item.name}</li>)
    }</ul>
    return (
        <Modal>
            {cartItems}
            <div>
                <span>Total</span>
                <span>10.11</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart
