import React from 'react';
import { Box, Typography, Paper, Stack } from '@mui/material';

const stats = [
  {
    number: '10K+',
    label: 'Trusted Clients',
  },
  {
    number: '20K+',
    label: 'Orders Delivered',
  },
  {
    number: '25+',
    label: 'Sellers',
  },
];

const Superiority = () => {
  return (
    <Box sx={{ backgroundColor: '#f9fafa', py: 6, px: 2, textAlign: 'center' }}>
      <Typography variant="h5" fontWeight="bold" color="green" mb={4}>
        First Track Superiority
      </Typography>
      <Stack spacing={3} alignItems="center">
        {stats.map((item, index) => (
          <Paper
            key={index}
            elevation={2}
            sx={{
              width: '100%',
              maxWidth: 500,
              py: 3,
              px: 2,
              backgroundColor: '#e0e0e0',
              borderRadius: 2,
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              {item.number}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {item.label}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default Superiority;
