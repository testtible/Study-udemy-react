import React, { useContext, useEffect, useState } from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = ({onClick}) => {
    const [bumpHighlight, setBumpHightlight] = useState(false);
    const cartCtx = useContext(CartContext);
    const cartItems = cartCtx.items;
    const numberOfCartItems = cartItems.reduce((curNum, item) => {
        return curNum + item.amount;
    }, 0);

    const addBumpAnimation = `${styles.button} ${bumpHighlight && styles.bump}`;

    useEffect(() => {
        if(cartItems.length === 0) {
            return;
        }
        setBumpHightlight(true);
        
        const timer = setTimeout(() => {
            setBumpHightlight(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [cartItems]);
    return (
        <button className={addBumpAnimation} onClick={onClick}> 
            <span className={styles.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;