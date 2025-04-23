import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ComputerIcon from '@mui/icons-material/Computer';
import SecurityIcon from '@mui/icons-material/Security';
import AssessmentIcon from '@mui/icons-material/Assessment';

const services = [
  {
    icon: <TrendingUpIcon fontSize="large" color="primary" />,
    title: 'Supply Chain Optimization',
    description: 'Enhance efficiency across your supply chain with smart analytics and expert planning.',
  },
  {
    icon: <ComputerIcon fontSize="large" color="primary" />,
    title: 'Real-Time Tracking',
    description: 'Monitor shipments with GPS and IoT for complete visibility and faster deliveries.',
  },
  {
    icon: <SecurityIcon fontSize="large" color="primary" />,
    title: 'Customs & Compliance',
    description: 'Simplify global shipping with automated compliance checks and customs documentation.',
  },
  {
    icon: <AssessmentIcon fontSize="large" color="primary" />,
    title: 'Warehouse Solutions',
    description: 'Maximize space and streamline fulfillment with intelligent warehouse management.',
  },
];

const Services = () => {
  return (
    <Box py={10} bgcolor="#f5f5f5">
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Our Services
      </Typography>

      <Grid container spacing={4} justifyContent="center" mt={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                textAlign: 'center',
                borderRadius: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                },
              }}
            >
              <Box mb={2}>{service.icon}</Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
