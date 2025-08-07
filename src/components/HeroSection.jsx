// import React from 'react';
// import { Button, Typography, Box, Container } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import courierBg from '/courier-bg.jpg';

// const HeroSection = () => {
//   const navigate = useNavigate();

//   const handleContactClick = () => {
//     navigate('/contact-us');
//   };
//     const handleLearnMoreClick = () => {
//       navigate('/blog');
//   };

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
//       <Container
//         maxWidth="md"
//         sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: 3, p: 4 }}
//       >
//         <Typography variant="h3" fontWeight="bold" gutterBottom>
//           Welcome to Ship Runway Courier
//         </Typography>
//         <Typography variant="h6" sx={{ mb: 4 }}>
//           Your Trusted Logistics Partner
//         </Typography>

//         <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
//           <Button
//             variant="contained"
//             size="large"
//             onClick={handleLearnMoreClick}
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
//             onClick={handleContactClick}
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

import React from 'react';
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
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center text-white px-4 py-10"
      style={{ backgroundImage: `url(${courierBg})` }}
    >
      <div className="bg-black/60 rounded-2xl p-8 max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-blue-500">Ship</span>{' '}
          <span className="text-orange-500">Runway</span> Courier
        </h1>
        <p className="text-lg md:text-xl mb-6">Your Trusted Logistics Partner</p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={handleLearnMoreClick}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-lg"
          >
            Learn More
          </button>
          <button
            onClick={handleContactClick}
            className="border border-white hover:bg-white/20 text-white font-bold py-3 px-6 rounded-lg text-lg"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

