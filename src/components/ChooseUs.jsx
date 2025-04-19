import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import LockIcon from '@mui/icons-material/Lock';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const features = [
  {
    icon: <ThumbUpAltIcon fontSize="large" color="primary" />,
    title: 'Trusted Reputation',
    description: 'Proven excellence backed by customer satisfaction.',
  },
  {
    icon: <LockIcon fontSize="large" color="primary" />,
    title: 'Advanced Security',
    description: 'Protecting packages with state-of-the-art systems.',
  },
  {
    icon: <AccessTimeIcon fontSize="large" color="primary" />,
    title: 'On-Time Commitment',
    description: 'Deliveries that arrive when they’re supposed to.',
  },
  {
    icon: <SupportAgentIcon fontSize="large" color="primary" />,
    title: 'Live Assistance',
    description: 'Real-time help whenever you need it.',
  },
];

const ChooseUs = () => {
  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: '#fff' }}>
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        Why Choose Us
      </Typography>

      <Grid container spacing={4} justifyContent="center" mt={2}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: 'center',
                borderRadius: 3,
                backgroundColor: '#f9fafb',
                transition: '0.3s',
                '&:hover': { boxShadow: 6 },
              }}
            >
              <Box mb={2}>{feature.icon}</Box>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ChooseUs;
