import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const AboutSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f0fffe', py: 8, px: 4 }}>
      {/* Mission */}
      <Grid container spacing={4} alignItems="center" mb={6}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" color="green" fontWeight="bold" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1">
            To revolutionize logistics with innovative technology, offering scalable and intelligent delivery
            solutions tailored for global businesses.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="/about-1.jpg" alt="Tech Logistics" style={{ width: '100%', borderRadius: 8 }} />
        </Grid>
      </Grid>

      {/* Vision */}
      <Grid container spacing={4} alignItems="center" mb={6}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" color="green" fontWeight="bold" gutterBottom>
            Our Vision
          </Typography>
          <Typography variant="body1">
            To become the world’s most trusted and intelligent logistics network, powered by data-driven systems
            and seamless connectivity.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="/about-2.jpg" alt="Vision Warehouse" style={{ width: '100%', borderRadius: 8 }} />
        </Grid>
      </Grid>

      {/* Values */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h6" color="green" fontWeight="bold" gutterBottom>
            Our Values
          </Typography>
          <Typography variant="body1">
            Innovation, integrity, and excellence are at the heart of everything we do. We strive to deliver value
            with every shipment and build long-term partnerships through transparency and commitment.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="/about-3.jpg" alt="Team Values" style={{ width: '100%', borderRadius: 8 }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
