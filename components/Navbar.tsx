"use client";
import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  Drawer,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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
    <Box sx={{ textAlign: "center", height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Image src="/css_transparent.png" alt="Logo" width={50} height={50} />
        <IconButton onClick={handleDrawerToggle} sx={{ color: "#fff" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} href="/" sx={{ justifyContent: "flex-start" }} onClick={handleDrawerToggle}>
            <ListItemText primary="Home" primaryTypographyProps={{ sx: { color: "#fff" } }} />
          </ListItemButton>
        </ListItem>

        <Divider sx={{ backgroundColor: "#555", width: "90%", marginLeft: "6%" }} />

        <ListItem disablePadding>
          <ListItemButton component={Link} href="/codex" sx={{ justifyContent: "flex-start" }} onClick={handleDrawerToggle}>
            <ListItemText primary="Codex" primaryTypographyProps={{ sx: { color: "#fff"} }} />
          </ListItemButton>
        </ListItem>

        <Divider sx={{ backgroundColor: "#555", width: "90%", marginLeft: "6%" }} />

        <ListItem disablePadding>
          <ListItemButton component={Link} href="/pro-battle" sx={{ justifyContent: "flex-start" }} onClick={handleDrawerToggle}>
            <ListItemText primary="Pro Battle" primaryTypographyProps={{ sx: { color: "#fff" } }} />
          </ListItemButton>
        </ListItem>

        <Divider sx={{ backgroundColor: "#555", width: "90%", marginLeft: "6%" }} />

        <ListItem disablePadding>
          <ListItemButton component={Link} href="/forms" sx={{ justifyContent: "flex-start" }} onClick={handleDrawerToggle}>
            <ListItemText primary="Forms" primaryTypographyProps={{ sx: { color: "#fff" } }} />
          </ListItemButton>
        </ListItem>

        <Divider sx={{ backgroundColor: "#555", width: "90%", marginLeft: "6%" }} />
      </List>
    </Box>
  );

  return (
    <>
      <AppBar id="NavBar" position="relative" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', color: 'white', boxShadow: 'none' }}>
        <Toolbar>
          <Box>
            <Image src="/css_transparent.png" alt="Logo" width={50} height={50} />
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', flexGrow: 1 }}>
            <Paper 
              elevation={3} 
              sx={{ 
              display: 'inline-flex', 
              justifyContent: 'center',
              backgroundColor: 'transparent',
              borderRadius: '25px',
              padding: '10px',
              paddingX: '16px',
              }}
            >
              <Link href="/" passHref>
                <Typography sx={{ color: '#000', '&:hover': { color: '#D81B60' }, mr: 3, cursor: 'pointer', justifyContent: 'center', display: 'flex' }}>
                  Home
                </Typography>
              </Link>

              <Link href="/codex" passHref>
                <Typography sx={{ color: '#000', '&:hover': { color: '#D81B60' }, mr: 3, cursor: 'pointer', justifyContent: 'center', display: 'flex' }}>
                  Codex
                </Typography>
              </Link>

              <Link href="/pro-battle" passHref>
                <Typography sx={{ color: '#000', '&:hover': { color: '#D81B60' }, mr: 3, cursor: 'pointer', justifyContent: 'center', display: 'flex' }}>
                  Pro Battle
                </Typography>
              </Link>

              <Link href="/forms" passHref>
                <Typography sx={{ color: '#000', '&:hover': { color: '#D81B60' }, cursor: 'pointer', justifyContent: 'center', display: 'flex' }}>
                  Forms
                </Typography>
              </Link>
            </Paper>

            {/* add more */}
          </Box>

          <IconButton
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none', color: '#000' }, ml: 'auto' }}
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
            width: '60%',
            height: '50%',
            borderRadius: '0 0 0 15px',
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
