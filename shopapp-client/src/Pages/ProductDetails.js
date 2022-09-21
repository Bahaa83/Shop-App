import { Skeleton, Typography, Grid ,Divider, TableContainer, Table, TableHead, TableBody, TableCell} from '@mui/material';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.body.style.backgroundColor = "white";
    axios.get(`https://localhost:5000/api/Products/${id}`)
      .then(resp => setProduct(resp.data))
      .catch(error => console.log(error))
      .finally(setLoading(true))
    return () => {
      document.body.style.backgroundColor = "#E8E8E8";
    }
  }, [id])

  const showPoductDetails = () => {
    return (
    <Grid container spacing={6} marginTop={10} paddingRight={2}>
        <Grid item xs={12} md={6}>
          {loading?<img src={ product.pictureUrl} alt="ProductImage" /> : <Skeleton/>} 
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant='h4' color="initial">{loading ? product.name : <Skeleton />} name</Typography>
          <Divider sx={{borderBottomWidth:"medium"}} variant="fullWidth" /> 
          <Typography fontWeight="bolder" variant='h4' color="primary.dark">{loading ? (product.price / 100).toFixed(2) : <Skeleton />} Kr</Typography>
          <TableContainer>
            <Table>
                <TableBody>
                    <TableHead>
                      <TableCell>Name</TableCell>
                      <TableCell>{product.name}</TableCell>
                    </TableHead>
                    <TableHead>
                      <TableCell>Description</TableCell>
                      <TableCell>{product.description}</TableCell>
                    </TableHead>
                    <TableHead>
                      <TableCell>Brand</TableCell>
                      <TableCell>{product.brand}</TableCell>
                    </TableHead>
                    <TableHead>
                      <TableCell> In Stock</TableCell>
                      <TableCell>{product.quantityInStock}</TableCell>
                    </TableHead>
                </TableBody>
            </Table> 
          </TableContainer>
        </Grid>
        
    </Grid> 
    )
  }

  return (
    <Fragment>
      {showPoductDetails()}
    </Fragment>
  )
}
export default ProductDetails;
