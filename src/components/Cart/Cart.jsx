import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

export const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    console.log(cart, 'this is new')
    console.log(totalQuantity)
    return (
        <div>
            {
                totalQuantity === 0
                ? 
                <div>
                    <h1>No hay items en el carrito</h1>
                    <Link to="/">Productos</Link>
                </div>
                :
                <div>
                    {cart.map((prod) => (
                        <CartItem key={prod.id} {...prod} />
                    ))}
                    <h3>Total: ${total}</h3>
                    <button onClick={() => clearCart()}>Limpiar carrito</button>
                    <Link to="/checkout">Checkout</Link>
                </div>
            }
        </div>
    )
    // if (totalQuantity === 0) {
    //     return (
    //         <div>
    //             <h1>No hay items en el carrito</h1>
    //             <Link to="/">Productos</Link>
    //         </div>
    //     )
    // }

    // return (
    //     <div>
    //         {cart.map((p) => (
    //             <CartItem key={p.id} {...p} />
    //         ))}
    //         <h3>Total: ${total}</h3>
    //         <button onClick={() => clearCart()}>Limpiar carrito</button>
    //         <Link to="/checkout">Checkout</Link>
    //     </div>
    // )
}