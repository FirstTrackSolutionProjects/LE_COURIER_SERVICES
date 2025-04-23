// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import Slider from 'react-slick';

// const partners = [
//   {
//     name: 'Delhivery',
//     logo: '/partners/delhivery.jpeg',
//   },
//   {
//     name: 'Gati',
//     logo: '/partners/gati.png',
//   },
//   {
//     name: 'Netlify',
//     logo: '/partners/netlify.png',
//   },
//   {
//     name: 'Zoho',
//     logo: '/partners/zoho.jpeg',
//   },
//   // Add more partners if needed
// ];

// const TrustedPartners = () => {
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4, // Number of logos to show at once
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false, // Optionally, you can add arrows if you want
//     dots: false, // Remove dots if not needed
//     centerMode: true, // Center the slides for better visual appeal
//     focusOnSelect: true, // Allow selecting a slide (optional)
//   };

//   return (
//     <Box sx={{ backgroundColor: '#e6e6e6', py: 6, px: 4 }}>
//       <Typography
//         variant="h6"
//         align="center"
//         fontWeight="bold"
//         gutterBottom
//         sx={{ color: '#2d3748' }}
//       >
//         Our Trusted Partners
//       </Typography>
//       <Slider {...settings}>
//         {partners.map((partner, index) => (
//           <Box
//             key={index}
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               padding: '0 15px', // Added horizontal padding between logos
//             }}
//           >
//             <Box
//               component="img"
//               src={partner.logo}
//               alt={partner.name}
//               sx={{
//                 height: 100, // Increased logo size
//                 width: 'auto',
//                 backgroundColor: 'white',
//                 borderRadius: 2,
//                 p: 1.5,
//                 boxShadow: 2,
//                 transition: 'transform 0.3s', // Optional: smooth hover effect
//                 '&:hover': {
//                   transform: 'scale(1.1)', // Slight zoom on hover
//                 },
//               }}
//             />
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// export default TrustedPartners;

// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const partners = [
//   {
//     name: 'Delhivery',
//     logo: '/partners/delhivery.jpeg',
//   },
//   {
//     name: 'Gati',
//     logo: '/partners/gati.png',
//   },
//   {
//     name: 'Netlify',
//     logo: '/partners/netlify.png',
//   },
//   {
//     name: 'Zoho',
//     logo: '/partners/zoho.jpeg',
//   },
//   // Add more partners if needed
// ];

// const TrustedPartners = () => {
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//     dots: false,
//     centerMode: true,
//     focusOnSelect: true,
//     responsive: [
//       {
//          // tablets
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768, // mobile landscape
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 340, // small mobile
//         settings: {
//           slidesToShow: 1,
//           centerMode: false,
//         },
//       },
//     ],
//   };

//   return (
//     <Box sx={{ backgroundColor: '#e6e6e6', py: 6, px: { xs: 2, sm: 4 } }}>
//       <Typography
//         variant="h6"
//         align="center"
//         fontWeight="bold"
//         gutterBottom
//         sx={{ color: '#2d3748' }}
//       >
//         Our Trusted Partners
//       </Typography>
//       <Slider {...settings}>
//         {partners.map((partner, index) => (
//           <Box
//             key={index}
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               px: 1.5,
//             }}
//           >
//             <Box
//               component="img"
//               src={partner.logo}
//               alt={partner.name}
//               sx={{
//                 height: 100,
//                 maxWidth: 120,
//                 width: 'auto',
//                 backgroundColor: 'white',
//                 borderRadius: 2,
//                 p: 1.5,
//                 boxShadow: 2,
//                 transition: 'transform 0.3s',
//                 '&:hover': {
//                   transform: 'scale(1.1)',
//                 },
//               }}
//             />
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// export default TrustedPartners;

import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    name: 'BlueDart',
    logo: '/partners/bluedart.jpg',
  },
  {
    name: 'Razorpay',
    logo: '/partners/razorpay.png',
  },
  {
    name: 'Zoho',
    logo: '/partners/zoho.jpeg',
  },
  {
    name: 'DHL',
    logo: '/partners/dhl.png',
  },
  {
    name: 'Ecom Express',
    logo: '/partners/ecom-express.png',
  },
  {
    name: 'XpressBees',
    logo: '/partners/xpressbees.png',
  },
  // Add more partners if needed
];

const TrustedPartners = () => {
  const settings = {
    infinite: true,
    speed: 2000, // slow continuous scroll
    autoplay: true,
    autoplaySpeed: 0, // required for continuous scroll
    cssEase: 'linear', // smooth scrolling
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: false, // better for smooth sliding
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ backgroundColor: '#e6e6e6', py: 6, px: { xs: 2, sm: 4 } }}>
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
              px: 1.5,
            }}
          >
            <Box
              component="img"
              src={partner.logo}
              alt={partner.name}
              sx={{
                height: 100,
                width: 'auto',
                backgroundColor: 'white',
                borderRadius: 2,
                boxShadow: 2,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.1)',
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


