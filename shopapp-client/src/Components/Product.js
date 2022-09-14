import React, { Fragment } from 'react'

const Product = ({product}) => {
    
    return (
        <Fragment>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.pictureUrl}</div>
        </Fragment>
    )
}

export default Product;
