import React, { useContext } from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = ({name, description, price, id}) => {
    const cartCtx = useContext(CartContext);
    const dollarPrice = `$${price.toFixed(2)}`
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id,
            name,
            price,
            amount
        })
    };
    
    return (
        <li className={styles.meal}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>{dollarPrice}</div>
            </div>
            <div>
                <MealItemForm id={id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
};

export default MealItem;