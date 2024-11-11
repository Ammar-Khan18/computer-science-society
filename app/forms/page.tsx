import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Divider,
  Chip,
} from '@mui/material';

interface Form {
  Title: string;
  Description: string;
  Link: string;
}

// Dummy Data, replace with actual data
const forms: Form[] = [
  { Title: 'Form 1', Description: 'This is the first form', Link: 'https://www.google.com' },
  { Title: 'Form 2', Description: 'This is the second form', Link: 'https://www.google.com' },
  { Title: 'Form 3', Description: 'This is the third form', Link: 'https://www.google.com' },
  { Title: 'Form 4', Description: 'This is the fourth form with a long description, much more will be added when this will be done', Link: 'https://www.google.com' },
];

const FormPage: React.FC = () => {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', p: 4 }}>
      {/* Background Image */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url(/gradient_bg_hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -2,
        }}
      />

      {/* Background Blur Effect - Decorative */}
      <Box
        sx={{
          position: 'fixed',
          top: '-10%',
          left: '50%',
          width: { xs: '36.125rem', sm: '72.1875rem' },
          transform: 'translateX(-50%) rotate(30deg)',
          aspectRatio: '1155 / 678',
          background:
            'linear-gradient(135deg, rgba(255, 128, 181, 0.3), rgba(144, 137, 252, 0.3))',
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          zIndex: -1,
          filter: 'blur(40px)',
        }}
      />

      {/* Heading */}
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom sx={{ borderBottom: 1, borderColor: 'black', display: 'inline-block' }}>
        Available Forms
      </Typography>

      {/* Form List */}
      <List>
        {forms.map((form, index) => (
          <React.Fragment key={form.Title}>
            <ListItem
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                py: 2,
                px: 3,
                bgcolor: 'inherit',
                mb: 1,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <ListItemText
                  primary={
                    <Typography variant="body1" fontWeight="bold" component="span">
                      {form.Title}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" color="text.secondary" component="span">
                      {form.Description}
                    </Typography>
                  }
                />
              </Box>
              <Chip
                label="Open Form"
                component="a"
                href={form.Link}
                clickable
                color="primary"
                sx={{ textAlign: 'right' }}
              />
            </ListItem>
            {index < forms.length - 1 && (
              <Divider
                sx={{
                  bgcolor: 'black',
                  my: 1,
                  width: { xs: '90%', md: '97%' },
                  mx: 'auto',
                }}
              />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default FormPage;
