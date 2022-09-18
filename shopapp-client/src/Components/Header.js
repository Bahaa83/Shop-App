import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const pages = ['Home', 'Products', 'Contact'];
const rightPages = ['Login', 'Register'];

const Header = () => {
  const links = ["Home", "Products", "Contact"];
  const rightLinks = ["Login", "Register"];

 

  return (
    <AppBar position="fixed" >
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Typography variant="h4" >
           ShopApp
          </Typography>
         
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
