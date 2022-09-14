import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from "./Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:5000/api/Products')
            .then(resp => {setProducts(resp.data)
            console.log(resp.data)})
            .catch(err => console.log(err));
    }, [])
   
    const showProducts = products.map(item =>
        
            <Product key={item.id} product={item} />
    );
    
    return (
        <div>{showProducts}</div>
    )
}

export default Products;