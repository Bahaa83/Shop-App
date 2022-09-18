import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Product from "./Product";
import Grid from '@mui/material/Grid';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:5000/api/Products')
            .then(resp => {setProducts(resp.data)
            console.log(resp.data)})
            .catch(err => console.log(err));
    }, [])
   
    const showProducts = products.map(pro =>
        
            <Grid item key={pro.id} xs={6} sm={4} lg={3}>
                <Product product={pro} />
            </Grid>
            
    );
    
    return (
        <Fragment>
            <Grid container rowSpacing={1} columnSpacing={3} sx={{mt:15,mb:5,px:2}}>
                {showProducts}
            </Grid>
            
        </Fragment>
        
    )
}

export default Products;