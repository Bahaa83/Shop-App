import {Typography, Grid ,Divider, TableContainer, Table, TableHead, TableCell, TableRow} from '@mui/material';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from "../Components/Loader";


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.body.style.backgroundColor = "white";
    axios.get(`https://localhost:5000/api/Product/${id}`)
      .then(resp => {
        setProduct(resp.data)
      console.log(product)})
      .catch(error => console.log(error))
      .finally(()=>setLoading(false))
    return () => {
      document.body.style.backgroundColor = "#E8E8E8";
    }
  }, [id,product])

  const showPoductDetails = () => {
    return (
    <Grid container spacing={6} marginTop={10} paddingRight={2}>
        <Grid item xs={12} md={6}>
        <img src={ product.pictureUrl} alt="ProductImage" /> 
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant='h4' color="initial"> product.name  name</Typography>
          <Divider sx={{borderBottomWidth:"medium"}} variant="fullWidth" /> 
          <Typography fontWeight="bolder" variant='h4' color="primary.dark"> {(product.price / 100).toFixed(2)} Kr</Typography>
          <TableContainer>
            <Table>
                <TableHead>
                  <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>{product.name}</TableCell>
                  </TableRow>
                </TableHead>
              <TableHead>
                  <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell>{product.description}</TableCell>
                  </TableRow>
                </TableHead>
              <TableHead>
                  <TableRow>
                      <TableCell>Brand</TableCell>
                      <TableCell>{product.brand}</TableCell>
                  </TableRow>
                </TableHead>
              <TableHead>
                  <TableRow>
                      <TableCell> In Stock</TableCell>
                      <TableCell>{product.quantityInStock}</TableCell>
                  </TableRow>
                </TableHead>
            </Table> 
          </TableContainer>
        </Grid>
        
    </Grid> 
    )
  }
    if(loading)return <Loader/>
  return (
    <Fragment>
      {showPoductDetails()}
    </Fragment>
  )
}
export default ProductDetails;
