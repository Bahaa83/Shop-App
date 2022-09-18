import React, { Fragment } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar';

const Product = ({product}) => {
    
    return (
        <Fragment>
            <Card sx={{height:"100%"}} >
                <CardHeader
                    avatar={
                        <Avatar sx={{bgcolor:"primary.dark"}}>
                        {product.brand.charAt(0)}
                        </Avatar>
                    }
                    title={product.name}
                    titleTypographyProps={{variant:"body2",color:"primary.dark",fontWeight:"bolder"}}
                />
                <CardMedia
                    component="img"
                    height="200"
                    image={product.pictureUrl}
                    alt={product.name}
                    title={product.name}
                    sx={{objectFit:"contain"}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"sx={{color:"primary.dark",fontWeight:"bolder",textAlign:"center"}}>
                    {(product.price /100).toFixed(2)}Kr
                    </Typography>
                    <Typography variant="body2" color="text.secondary"sx={{textAlign:"center",fontWeight:"bolder"}} >
                    {product.brand} / {product.type}
                    </Typography>
                </CardContent>
                <CardActions sx={{display:"flex",justifyContent:"center"}}>
                    <Button style={{fontWeight:"bolder"}} size="small">Add to Card</Button>
                    <Button style={{fontWeight:"bolder"}} size="small">View details</Button>
                </CardActions>
            </Card>
        </Fragment>
    )
}

export default Product;
