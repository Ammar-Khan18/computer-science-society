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
  Breadcrumbs,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Chip,
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import DescriptionIcon from '@mui/icons-material/Description';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const navLinks = [
    { href: "/", label: "Home", icon: <HomeIcon /> },
    { href: "/codex", label: "Codex", icon: <CodeIcon /> },
    { href: "/pro-battle", label: "Pro Battle", icon: <SportsEsportsIcon /> },
    { href: "/forms", label: "Forms", icon: <DescriptionIcon /> },
  ];

  // Styled chip similar to the original StyledBreadcrumb
  const StyledChip = styled(Chip)(({ theme }) => ({
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.grey[200],
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: theme.palette.grey[300],
    },
    cursor: "pointer",
  }));

  function CustomBreadcrumbs() {
    return (
      <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ ml: 1 }}>
          {navLinks.map((link) => (
            <Link href={link.href} key={link.label} passHref>
              <Link href={link.href} passHref>
                <StyledChip
                  label={link.label}
                  icon={link.icon}
                  clickable
                />
              </Link>
            </Link>
          ))}
        </Breadcrumbs>
      </Box>
    );
  }

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
  
            <CustomBreadcrumbs />

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
