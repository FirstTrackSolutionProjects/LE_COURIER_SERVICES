// import React from 'react';
// import { Button, Typography, Box, Container } from '@mui/material';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import courierBg from '/courier-bg.jpg'; // use a background image related to courier/logistics

// const HeroSection = () => {
//   return (
//     <Box
//       sx={{
//         backgroundImage: `url(${courierBg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         textAlign: 'center',
//         px: 3,
//         py: 10,
//         color: '#fff',
//       }}
//     >
//       <Container maxWidth="md" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: 3, p: 4 }}>
//         {/* <img src="/logo.png" alt="ADI Courier Services" style={{ maxWidth: '150px', marginBottom: '1.5rem' }} /> */}

//         <Typography variant="h3" fontWeight="bold" gutterBottom>
//           Welcome to ADI Courier Services
//         </Typography>
//         <Typography variant="h6" sx={{ mb: 4 }}>
//           Your Trusted Logistics Partner
//         </Typography>

//         <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
//           <Button
//             variant="contained"
//             size="large"
//             sx={{
//               backgroundColor: '#e53935',
//               '&:hover': { backgroundColor: '#c62828' },
//               px: 4,
//               fontWeight: 'bold',
//             }}
//           >
//             Learn More
//           </Button>
//           <Button
//             variant="outlined"
//             size="large"
//             sx={{
//               color: '#fff',
//               borderColor: '#fff',
//               '&:hover': { backgroundColor: '#ffffff22' },
//               px: 4,
//               fontWeight: 'bold',
//             }}
//           >
//             Contact Us
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default HeroSection;

// HeroSection.jsx

import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import courierBg from '/courier-bg.jpg';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact-us');
  };
    const handleLearnMoreClick = () => {
      navigate('/blog');
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${courierBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 3,
        py: 10,
        color: '#fff',
      }}
    >
      <Container
        maxWidth="md"
        sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: 3, p: 4 }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to ADI Courier Services
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Your Trusted Logistics Partner
        </Typography>

        <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
          <Button
            variant="contained"
            size="large"
            onClick={handleLearnMoreClick}
            sx={{
              backgroundColor: '#e53935',
              '&:hover': { backgroundColor: '#c62828' },
              px: 4,
              fontWeight: 'bold',
            }}
          >
            Learn More
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={handleContactClick}
            sx={{
              color: '#fff',
              borderColor: '#fff',
              '&:hover': { backgroundColor: '#ffffff22' },
              px: 4,
              fontWeight: 'bold',
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
