"use client"
import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Grid from "@mui/material/Grid2";

import Image from "next/image";
import Register from "@/public/Register.png";

const ProBattleRegister: React.FC = () => {
    return (
        <Container maxWidth="lg" sx={{ mb: 20 }}>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
                <Grid size={{xs: 12, md: 7}}>
                    <Box sx={{ mt: 25, mb: 2, textAlign: { xs: "center", md: "left" } }}>
                        <Typography id="register" variant="h3" sx={{ fontSize: { xs: '1.8rem', md: '2.5rem', lg: '3rem' }, borderBottom: "2px solid", borderColor: "primary.secondary", display: "inline-block" }}>
                            Register Now
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, flexDirection: "column", alignItems: { xs: "center", md: "flex-start" }, textAlign: { xs: "center", md: "left" } }}>
                        <Box sx={{ width: { xs: "100%", sm: "100%" } }}>
                            <Typography variant="body1" sx={{ mb: 4 }}>
                                Register now in your chosen event to participate and show off your skills. Win exciting prizes and rewards.
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                            <Button 
                                component="a"
                                href="/pro-battle/Registration" 
                                variant="contained"
                                color="primary"
                                endIcon={<HowToRegIcon />} // Icon on the right side
                                sx={{
                                backgroundColor: "#FFD700", // Gold color
                                color: "black",
                                fontWeight: "bold",
                                px: 4, // Extra padding for better button appearance
                                py: 1.5,
                                "&:hover": {
                                backgroundColor: "#FFA500", // Darker gold on hover
                                },
                                }}
                            >
                                Register Now
                            </Button>
                        </Box>
                    </Box>
                </Grid>

                <Grid size={{xs: 12, md: 5}} sx={{ display: { xs: "none", md: "block" } }}>
                    <Box textAlign="center" sx={{ maxWidth: '650px', marginTop: '50px' }}>
                        <Image src={Register} alt="Home" width={450} height={400} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProBattleRegister;