import React from 'react'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

export const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState(null)
    
    const { itemId } = useParams() 
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'Items', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])
    
    return (
        <div className="itemDetail__container">
            <ItemDetail {...product} />
        </div>
    )
}
