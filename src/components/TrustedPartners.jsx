import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';

const partners = [
  {
    name: 'Delhivery',
    logo: '/partners/delhivery.jpeg',
  },
  {
    name: 'Gati',
    logo: '/partners/gati.png',
  },
  {
    name: 'Netlify',
    logo: '/partners/netlify.png',
  },
  {
    name: 'Zoho',
    logo: '/partners/zoho.jpeg',
  },
  // Add more partners if needed
];

const TrustedPartners = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of logos to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Optionally, you can add arrows if you want
    dots: false, // Remove dots if not needed
    centerMode: true, // Center the slides for better visual appeal
    focusOnSelect: true, // Allow selecting a slide (optional)
  };

  return (
    <Box sx={{ backgroundColor: '#e6e6e6', py: 6, px: 4 }}>
      <Typography
        variant="h6"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{ color: '#2d3748' }}
      >
        Our Trusted Partners
      </Typography>
      <Slider {...settings}>
        {partners.map((partner, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              padding: '0 15px', // Added horizontal padding between logos
            }}
          >
            <Box
              component="img"
              src={partner.logo}
              alt={partner.name}
              sx={{
                height: 100, // Increased logo size
                width: 'auto',
                backgroundColor: 'white',
                borderRadius: 2,
                p: 1.5,
                boxShadow: 2,
                transition: 'transform 0.3s', // Optional: smooth hover effect
                '&:hover': {
                  transform: 'scale(1.1)', // Slight zoom on hover
                },
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TrustedPartners;


