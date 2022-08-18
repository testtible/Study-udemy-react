import React, { useRef, useState } from 'react';
import styles from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true 
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (e) => {
        e.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid
        })
        
        const formIsValid = 
        enteredNameIsValid &&
        enteredStreetIsValid &&
        enteredCityIsValid &&
        enteredPostalCodeIsValid;

        if(!formIsValid) {
            return;
        }
        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostalCode,
            city: enteredCity
        })
    };
    // 데이터를 얻는 방법 2가지
    // 키를 누를 때 마다 입력된 데이터를 얻음.
    // useRef를 통해 한 번에 가져옴.

    const nameControlStyles = `${styles.control} ${
        formInputsValidity.name ? '' : styles.invalid
    }`;

    const streetControlStyles = `${styles.control} ${
        formInputsValidity.street ? '' : styles.invalid
    }`;

    const postalCodeControlStyles = `${styles.control} ${
        formInputsValidity.postalCode ? '' : styles.invalid
    }`;

    const cityControlStyles = `${styles.control} ${
        formInputsValidity.city ? '' : styles.invalid
    }`;

    return (
        <form className={styles.form} onSubmit={confirmHandler}>
            <div className={nameControlStyles}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef}/>
            </div>
            <div className={streetControlStyles}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef}/>
            </div>
            <div className={postalCodeControlStyles}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalCodeInputRef}/>
            </div>
            <div className={cityControlStyles}>
                <label htmlFor='city'>City Code</label>
                <input type='text' id='city' ref={cityInputRef}/>
            </div>
            <div className={styles.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button className={styles.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;

// button type의 default는 submit