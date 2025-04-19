import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Grid } from '@mui/material';
import Slider from 'react-slick';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, TechFlow Inc.',
    feedback: 'First Track transformed our shipping process. Their platform is fast, reliable, and incredibly user-friendly.',
    avatar: '/images/avatar1.jpg',
  },
  {
    name: 'Sarah Lin',
    role: 'Operations Manager, GlobalGoods',
    feedback: 'We’ve experienced outstanding service and prompt deliveries. Highly recommended!',
    avatar: '/images/avatar2.jpg',
  },
  {
    name: 'Carlos Rivera',
    role: 'Logistics Lead, E-Marketplace',
    feedback: 'The best logistics partner we’ve worked with. Seamless integrations and great customer support.',
    avatar: '/images/avatar3.jpg',
  },
  {
    name: 'Emma Thompson',
    role: 'Marketing Head, Innovators Co.',
    feedback: 'Their services have exceeded our expectations. Smooth operations and fantastic support!',
    avatar: '/images/avatar4.jpg',
  },
  {
    name: 'Michael Jordan',
    role: 'Founder, MJ Enterprises',
    feedback: 'First Track has been a game-changer for our business. We trust them with all our deliveries.',
    avatar: '/images/avatar5.jpg',
  },
];

const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true, // Allow user to navigate manually
    dots: true, // Show dots for navigation
  };

  return (
    <Box sx={{ backgroundColor: '#fefefe', py: 8, px: 4 }}>
      <Typography variant="h5" align="center" fontWeight="bold" mb={6} color="green">
        What Our Clients Say
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index}>
            <Card sx={{ borderRadius: 3, p: 2 }}>
              <CardContent>
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  sx={{ width: 60, height: 60, mb: 2, mx: 'auto' }}
                />
                <Typography variant="body1" align="center" mb={2}>
                  “{testimonial.feedback}”
                </Typography>
                <Typography variant="subtitle1" align="center" fontWeight="bold">
                  {testimonial.name}
                </Typography>
                <Typography variant="subtitle2" align="center" color="text.secondary">
                  {testimonial.role}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Testimonial;
