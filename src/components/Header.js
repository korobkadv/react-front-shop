import React, { useState } from 'react';
import { FaShoppingBasket } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
    let sum = 0;
    props.orders.forEach(el => sum += Number.parseFloat(el.price));
    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className='sum'>Total sum: {new Intl.NumberFormat('ru-RU').format(sum)} $</p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>There are no items in the cart</h2>
        </div>
    )
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div>
                <span className='logo'>Moto Store</span>
                <ul className='nav'>
                    <li>Home</li>
                    <li>About</li>
                    <li>LogIn</li>
                </ul>
                <div className={`sopping-basket-button ${cartOpen && 'active'}`}>
                    <FaShoppingBasket onClick={() => setCartOpen(cartOpen = !cartOpen)} className='sopping-basket-button-icon'  /> = {props.countOrders}
                </div>
                {cartOpen && (
                    <div className='shop-basket'>
                        {props.orders.length > 0 ? showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    )
}
