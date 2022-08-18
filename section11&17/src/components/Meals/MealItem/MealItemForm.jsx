import React, { useRef, useState } from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = ({id, onAddToCart}) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredAmount = +amountInputRef.current.value;
        if(
            amountInputRef.current.value.trim().length === 0 ||
            enteredAmount < 1 || 
            enteredAmount > 5
        ) {
            setAmountIsValid(false);
            return;
        }
        onAddToCart(enteredAmount);
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input label='Amount' input={{
                id: `amount_${id}`,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}
            ref={amountInputRef}/>
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    );
};

export default MealItemForm;