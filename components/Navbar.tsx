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
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Image src="/css_transparent.png" alt="Logo" width={80} height={80} />
      </Typography>
      <List>
        <ListItem disablePadding sx={{ justifyContent: 'center', flexDirection: 'column' }}>
          <ListItemButton component={Link} href="/" sx={{ textAlign: 'center' }}>
            <ListItemText primary="Home" sx={{ color: '#fff' }} />
          </ListItemButton>

          <ListItemButton component={Link} href="/codex" sx={{ textAlign: 'center' }}>
            <ListItemText primary="Codex" sx={{ color: '#fff' }} />
          </ListItemButton>

          <ListItemButton component={Link} href="/forms" sx={{ textAlign: 'center' }}>
            <ListItemText primary="Forms" sx={{ color: '#fff' }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar id="NavBar" position="relative" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', color: 'white', boxShadow: 'none' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Image src="/css_transparent.png" alt="Logo" width={50} height={50} />
          </Box>
          
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button 
              LinkComponent={Link} 
              href="/" 
              sx={{ 
              mr: 2, 
              color: '#000', 
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
              },
              }}
            >
              Home
            </Button>

            <Button 
              LinkComponent={Link} 
              href="/codex" 
              sx={{ 
              mr: 2, 
              color: '#000', 
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
              },
              }}
            >
              Codex
            </Button>

            <Button 
              LinkComponent={Link} 
              href="/forms" 
              sx={{ 
              mr: 2, 
              color: '#000', 
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
              },
              }}
            >
              Forms 
            </Button>

            {/* add more */}
          </Box>
          <IconButton
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none', color: '#000' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#333',
            color: '#fff',
          },
          display: { xs: 'block', sm: 'none' },
        }}
      >
        <motion.div
          initial="hidden"
          animate={mobileOpen ? "visible" : "hidden"}
          variants={drawerVariants}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {drawer}
        </motion.div>
      </Drawer>
    </>
  );
};

export default Navbar;
