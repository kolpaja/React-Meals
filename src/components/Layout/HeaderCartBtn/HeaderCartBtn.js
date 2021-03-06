import React, { useContext } from 'react'
import CartIcon from "../../Cart/CartIcon"
import classes from './HeaderCartBtn.module.css';
import CartContext from '../../../store/cart-contex';

function HeaderCartBtn(props) {
    const cartCtx = useContext(CartContext);
    const numCartItems = cartCtx.items.reduce((curNum, item) => {
        return curNum + item.amount;
    }, 0)
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numCartItems}</span>
        </button>
    )
}

export default HeaderCartBtn
