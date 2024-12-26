import React from 'react';
import { Container, Box, Typography, Button, Grid } from '@mui/material';
import Partners from '../components/Partners';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();
  return (
    <>
    <Container maxWidth="" style={{ padding: '2rem', backgroundColor: '#f4f4f4', minHeight: 'calc(100vh - 64px)', display:'flex', flexDirection:'column', justifyContent:'center' }}>
      {/* Logo Section */}
      <Box display="flex" justifyContent="center" marginBottom="2rem">
        <img 
          src="/logo.svg" 
          alt="LE Courier Services Logo" 
          style={{ maxWidth: '300px', height: 'auto' }} 
        />
      </Box>

      {/* Welcome Text Section */}
      <Typography 
        variant="h2" 
        align="center" 
        style={{ fontWeight: 'bold', color: '#c70000', marginBottom: '1rem' }}
      >
        Welcome to LE Courier Services
      </Typography>
      <Typography 
        variant="h5" 
        align="center" 
        style={{ color: '#003366', marginBottom: '2rem' }}
      >
        Your Trusted Logistics Partner
      </Typography>

      {/* Call to Action Buttons */}
      <Box display="flex" justifyContent="center" gap={2} marginBottom="4rem">
        <Button 
          variant="contained"
          onClick={()=>navigate('/about-us')} 
          style={{ backgroundColor: '#c70000', color: '#fff', padding: '0.8rem 2rem' }}
        >
          Learn More
        </Button>
        <Button 
          variant="outlined" 
          onClick={()=>navigate('/contact-us')} 
          style={{ borderColor: '#003366', color: '#003366', padding: '0.8rem 2rem' }}
        >
          Contact Us
        </Button>
      </Box>

      {/* Features Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box 
            padding="2rem" 
            textAlign="center" 
            style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
          >
            <Typography variant="h6" style={{ color: '#c70000', fontWeight: 'bold' }}>Fast Delivery</Typography>
            <Typography style={{ color: '#666' }}>
              Ensure your parcels reach safely and securely at their destination in record time.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box 
            padding="2rem" 
            textAlign="center" 
            style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
          >
            <Typography variant="h6" style={{ color: '#003366', fontWeight: 'bold' }}>All India Coverage</Typography>
            <Typography style={{ color: '#666' }}>
              Delivering to 25+ States of India with more than 5+ domestic courier partners
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box 
            padding="2rem" 
            textAlign="center" 
            style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
          >
            <Typography variant="h6" style={{ color: '#c70000', fontWeight: 'bold' }}>Secure Logistics</Typography>
            <Typography style={{ color: '#666' }}>
              Your parcels are safe with our state-of-the-art systems anywhere in the country.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
    <Partners />
    </>
  );
}

export default Welcome;
