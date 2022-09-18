import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { List, ListItem ,IconButton, Badge} from '@mui/material';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const pages = ['Home', 'Products', 'Contact'];
const rightPages = ['Login', 'Register'];

const Header = () => {
  const links = ["Home", "Products", "Contact"];
  const rightLinks = ["Login", "Register"];

 

  return (
    <AppBar position="fixed" >
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h4" textTransform="uppercase">
            ShopApp
          </Typography>
          <List sx={{display:"flex"}}>
            {links.map(page => (
              <ListItem component={NavLink} key={page} to={page} sx={{ color: "inherit",typography:"h7" }}  >
                {page.toUpperCase()}
              </ListItem>
            ))}
          </List>
          <IconButton color="inherit" size='large' >
            <Badge badgeContent="2" color="secondary">
              <ShoppingCartIcon/>
            </Badge>
          </IconButton>
          
          <List sx={{display:"flex"}}>
            {rightLinks.map(page => (
              <ListItem component={NavLink} key={page} to={page} sx={{color:"inherit",typography:"h7"}}>
                {page.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
