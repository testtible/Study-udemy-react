import React from 'react';
import styles from './CartItem.module.css';

const CartItem = ({price, amount, name, onRemove, onAdd}) => {
    const fixedPrice = `$${price.toFixed(2)}`;
    return (
        <li className={styles['cart-item']}>
            <div>
                <h2>{name}</h2>
                <div className={styles.summary}>
                    <span className={styles.price}>{fixedPrice}</span>
                    <span className={styles.amount}>{amount}</span>
                </div>
            </div>
            <div className={styles.actions}>
                <button onClick={onRemove}>-</button>
                <button onClick={onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;