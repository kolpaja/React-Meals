import React, { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input'

function MealItemForm(props) {
    const [amountIsValid, setAmountIsValid] = useState(false)
    const amountInputRef = useRef();
    const formHandler = e => {
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNum = +enteredAmount //we convert the string to num
        if (enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
            setAmountIsValid(false)
            return;
        }
        props.onAddToCart(enteredAmountNum)
    }
    return (
        <form className={classes.form} onSubmit={formHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: "amount",
                    type: "number",
                    min: 1,
                    max: 5,
                    step: 1,
                    defaultValue: 1,
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount</p>}
        </form>
    )
}

export default MealItemForm
