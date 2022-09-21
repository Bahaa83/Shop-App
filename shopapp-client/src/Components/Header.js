import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { List, ListItem ,IconButton, Badge, Box} from '@mui/material';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { textAlign } from '@mui/system';

const pages = ['Home', 'Products', 'Contact'];
const rightPages = ['Login', 'Register'];
const linkStyle = {
                  color: 'grey.300',
                  typography: "h7",
                  '&.hover,&.active': {
                  color:'inherit'
                  }}

const Header = () => {
  const links = ["Home", "Products", "Contact"];
  const rightLinks = ["Login", "Register"];

 

  return (
    <AppBar position="fixed" >
      <Container maxWidth="xl">
        <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
          <Typography variant="h4" textTransform="uppercase">
            ShopApp
          </Typography>
          <Box display='flex' alignItems='center'>
            <List sx={{display:"flex"}}>
              {links.map(page => (
                <ListItem
                  component={NavLink}
                  key={page} to={page}
                  sx={linkStyle}
                >
                  {page.toUpperCase()}
                </ListItem>
              ))}
              </List>
            </Box>
          <Box display='flex' alignItems='center'>
              <IconButton color="inherit" size='large'component={NavLink} to="/ShopCard" >
                <Badge badgeContent="2" color="secondary">
                <ShoppingCartIcon  />
                </Badge>
              </IconButton>
              <List sx={{ display: "flex" }}>
              {rightLinks.map(page => (
                <ListItem component={NavLink}
                  key={page}
                  to={page}
                  sx={linkStyle}
                >
                  {page.toUpperCase()}
                </ListItem>
              ))}
              </List>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
