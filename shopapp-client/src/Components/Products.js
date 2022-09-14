import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:5000/api/Products')
            .then(resp => console.log(resp));
    }, [])
   
    return (
        <div>Products</div>
    )
}

export default Products;