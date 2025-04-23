import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Offer = () => {
  return (
    <Box py={10} px={3} bgcolor="#fff">
      <Typography variant="h4" align="center" fontWeight="bold" color="primary" gutterBottom>
        What We Offer
      </Typography>

      <Grid container spacing={6} justifyContent="center" mt={4}>
        <Grid item xs={12} md={6}>
        <Box textAlign="center">
            <Box mb={2}>
              <img
                src="/international shipping.jpg" // replace with your actual image path
                alt="International Shipping"
                style={{ width: '100%', maxHeight: 250, objectFit: 'contain' }}
              />
            </Box>
            <Typography variant="h5" fontWeight="bold" color="orange" gutterBottom>
              International Shipping
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Take your business across borders with ease. Our international logistics solutions are designed
              to handle complex shipping requirements while ensuring timely and secure deliveries. From
              managing customs regulations to providing real-time visibility, we make cross-border shipping
              hassle-free and efficient.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
        <Box textAlign="center">
            <Box mb={2}>
              <img
                src="/domestic shipping.jpg" // replace with your actual image path
                alt="Domestic Shipping"
                style={{ width: '100%', maxHeight: 250, objectFit: 'contain' }}
              />
            </Box>
            <Typography variant="h5" fontWeight="bold" color="orange" gutterBottom>
              Domestic Shipping
            </Typography>
            <Typography variant="body1" color="textPrimary">
              We simplify domestic logistics with tailored delivery services that keep your business agile.
              Whether you need fast last-mile delivery, reliable freight transport, or streamlined scheduling,
              our domestic shipping solutions are built to maximize efficiency and reliability from start to finish.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Offer;
