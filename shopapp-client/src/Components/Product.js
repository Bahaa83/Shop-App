import React, { Fragment } from 'react'

const Product = ({product}) => {
    
    return (
        <Fragment>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <img src={product.pictureUrl}  alt="ProductImage"/>
        </Fragment>
    )
}

export default Product;
