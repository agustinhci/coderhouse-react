import React from 'react'
import { useState, useEffect} from 'react'
import './ItemListContainer.css'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, doc, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

export const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const { categoryId } = useParams() 
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
        setLoading(true)

        const collectionRef = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

        getDocs(collectionRef)
        .then(response => {
            const productsAdapted = response.docs.map(docs => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            setProducts(productsAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })

    }, [categoryId])

    return (
        <div className="itemList--container">
            <p className="greeting">{greeting}</p>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer