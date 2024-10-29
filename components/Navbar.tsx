"use client";
import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Image src="/css_transparent.png" alt="Logo" width={80} height={80} />
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} href="/codex">
            <ListItemText primary="CodeX" />
          </ListItemButton>
        </ListItem>
        {/* <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemText primary="Probattle" />
          </ListItemButton>
        </ListItem> */}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="relative" sx={{backgroundColor: 'white', color: 'black', boxShadow: 'none'}}>
        <Toolbar>
          {/* Left side: CSS LOGO for both desktop and mobile */}
          <Link href="/" style={{ textDecoration: 'none', flexGrow: 1 }}>
            <Image src="/css_transparent.png" alt="Logo" width={80} height={80} />
          </Link>
          {/* Right side for larger screens */}
          <Box sx={{ display: { xs: 'none', sm: 'block'} }}>
            <Button LinkComponent={Link} href="/codex" color="inherit" sx={{ mr: 2 }}>CodeX</Button>
            {/*<Button color="inherit">Probattle</Button>*/}
          </Box>

          {/* Mobile menu button on the right side */}
          <IconButton
            color="inherit"
            edge="end" // Moves the menu button to the right in mobile view
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ '& .MuiDrawer-paper': {
          backgroundColor: '#333', // Drawer background color
          color: '#fff',           // Drawer text color
        }, display: { xs: 'block', sm: 'none' } }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
