// forms page where google forms link is embeddded with decriptions
'use client';

// material ui imports
import { Container, Typography } from '@mui/material';

const forms = () => {
    return (
        <Container>
        <Typography variant="h3">Forms</Typography>
        <Typography variant="body1">
            Please fill out the form below to get started with the program.
        </Typography>
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdGz8KQr7t8u1w4Jv5c4Pz4ZdJ6Z0zX0qQ7N3w6WZaXr2Wv5A/viewform?embedded=true"
            width="100%"
            height="1000"
        >
            Loading…
        </iframe>
        </Container>
    );    
};

export default forms;
