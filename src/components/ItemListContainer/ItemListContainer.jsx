import React from 'react'

export const ItemListContainer = ( props ) => {
    return (
        <div className="itemList--container">
            <p className="greeting">{props.greeting}</p>
        </div>
    )
}
