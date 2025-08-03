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
import NorthIcon from '@mui/icons-material/North';

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
        <Breadcrumbs aria-label="breadcrumb" sx={{ ml: 1 }} separator="›">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.label} passHref>
                <StyledChip
                  label={link.label}
                  icon={link.icon}
                  clickable
                />
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
        {navLinks.map((link) => (
          <React.Fragment key={link.label}>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                href={link.href}
                sx={{ justifyContent: "flex-start", gap: 2 }}
                onClick={handleDrawerToggle}
              >
                {link.icon}
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{ sx: { color: "#fff" } }}
                />
              </ListItemButton>
            </ListItem>
            <Divider
              sx={{ backgroundColor: "#555", width: "90%", marginLeft: "6%" }}
            />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
  

  return (
    <>
      <AppBar id="NavBar" position="fixed" sx={{ background: "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))", color: 'white', boxShadow: 'none' }}>
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
            sx={{ display: { sm: 'none', color: '#E82561' }, ml: 'auto' }}
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

      {/* Adding an circular arrow button to scroll to the top */}
      <Box sx={{ position: 'fixed', bottom: 15, right: 15, zIndex: 1000 }}>
        <IconButton
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          sx={{ backgroundColor: '#D81B60', color: '#ECEBDE',
            '&:hover': {
              backgroundColor: '#962D2D',
              color: '#ECEBDE'
            }
          }}
        >
          <NorthIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default Navbar;
