import React, { useState } from 'react'
import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'
import {  CartContext } from '../../context/CartContext'
import { useContext } from 'react' 

export const ItemDetail = ( props ) => {

    const { id, name, img, category, description, price, stock } = props

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext) 

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)

    }
    
    return (
        <article className="itemDetail">
            <header className="itemDetail__header">
                <img  className="itemDetail__header--img" src={img} alt={name} />
            </header>
            <section className="itemDetail__section">
                <h2 className="itemDetail__title">{name}</h2>
                <p className="itemDetail__info">Categoría: {category}</p>
                <p className="itemDetail__info">Descripción: {description}</p>
                <p className="itemDetail__info">Precio: ${price}</p>
            </section>
            <footer className="itemDetail__footer">
                {
                    quantityAdded > 0 ? (
                        <div className="counter">
                            <div className="counter__add">
                                <button className="counter__add--button" onClick={() => window.location.href = '/cart'}>Terminar compra</button>
                            </div>
                        </div>
                    ) : (
                        <ItemCount initial={1} stock={props.stock} onAdd={handleOnAdd}></ItemCount>
                    )
                }
                
            </footer>
        </article>
    )
}
