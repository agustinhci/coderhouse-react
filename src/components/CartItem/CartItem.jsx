import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartItem.css'

export const CartItem = () => {
    
    const { name, price, quantity, id, removeItem } = useContext(CartContext)

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

export default CartItem