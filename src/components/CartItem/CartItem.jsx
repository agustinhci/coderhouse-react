import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartItem.css'

export const CartItem = ({ name, price, quantity, id}) => {
    
    const { removeItem } = useContext(CartContext)

    return (
        <div className="cartList">
            <ul className="cartItem">
                <li>{name}</li>
                <li>${price}</li>
                <li>{quantity}</li>
                <li>Subtotal: ${price*quantity}</li>
                <li><button onClick={() => removeItem(id)} className="removeItem">X</button></li>
            </ul>
        </div>
    )
}
