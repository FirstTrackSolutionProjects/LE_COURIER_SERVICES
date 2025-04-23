import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; 

const industryData = [
 
  {
    title: 'Office Essentials',                  
    description: 'Streamlining your stationery supply chain with efficient, reliable logistics solutions tailored to your needs.',
    image: '/stationery.jpg',
  },
  {
    title: 'Consumer Electronics',               
    description: 'Specialized handling for sensitive electronics, ensuring safe and timely delivery.',
    image: '/electronics.jpg',
  },
  {
    title: 'Power & Electrical',                 
    description: 'Trusted logistics for the electrical sector, with robust transportation and warehousing.',
    image: '/electrical.jpg',
  },
  {
    title: 'Cosmetics',
    description: 'Efficient solutions tailored for cosmetics, ensuring seamless delivery and exceptional service.',
    image: '/cosmetics.jpg',
  },
  {
    title: 'Apparel & Textiles',                 
    description: 'Seamless distribution for textiles and apparel, optimized for fast-moving supply chains.',
    image: '/textile.jpg',
  },
  {
    title: 'Healthcare & Pharma',                
    description: 'Secure, compliant logistics for pharmaceuticals, with temperature-sensitive delivery options.',
    image: '/pharmaceuticals.jpg',
  },
];

const IndustryExpertise = () => {
  return (
    <Box py={10} px={3} bgcolor="#fff">
      <Typography variant="h4" fontWeight="bold" color="primary" mb={4}>
        Industry <span style={{ color: '#f1b600' }}>Expertise</span>
      </Typography>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {industryData.map((industry, index) => (
          <SwiperSlide key={index}>
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" gap={4}>
              <Box flex={1}>
                <img
                  src={industry.image}
                  alt={industry.title}
                  style={{ width: '100%', borderRadius: '10px' }}
                />
              </Box>
              <Box flex={1} textAlign="center">
                <Typography variant="body1" color="textPrimary" mb={2}>
                  {industry.description}
                </Typography>
                <Typography variant="h5" fontWeight="bold" color="orange">
                  {industry.title}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default IndustryExpertise;
