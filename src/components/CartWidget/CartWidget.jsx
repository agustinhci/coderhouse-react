import React from 'react'
import cart from './assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom' 

export const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
    <div className="cart" style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
        <div className="cart--container">
            <img src={cart} alt="cart icon" />
            <p className="cart__counter">{ totalQuantity }</p>
        </div>
    </div>
    )
}
