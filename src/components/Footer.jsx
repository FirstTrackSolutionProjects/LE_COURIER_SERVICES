// import { Link } from 'react-router-dom';
// import { Box, Typography } from '@mui/material';

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <Box component="footer" className="bg-red-600 text-white py-10 px-4">
//       <Box className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Company Info */}
//         <Box>
//           <Typography variant="h6" className="text-3xl font-extrabold font-serif mb-4">
//             ADI COURIER SERVICES
//           </Typography>
//           <Typography className="leading-relaxed">
//             Delivering excellence in logistics solutions across PAN India.
//             <br />
//             Your reliable partner for domestic shipping.
//           </Typography>
//         </Box>

//         {/* Quick Links */}
//         <Box>
//           <Typography variant="h6" className="text-xl font-semibold mb-4">Quick Links</Typography>
//           <ul className="space-y-2">
//             {[
//               { label: 'FAQs', to: '/faq' },
//               { label: 'About Us', to: '/about-us' },
//               { label: 'Contact Us', to: '/contact-us' },
//               { label: 'Privacy & Policy', to: '/privacy' },
//               { label: 'Terms of Use', to: '/terms' },
//             ].map((link, idx) => (
//               <li key={idx}>
//                 <Link
//                   to={link.to}
//                   onClick={scrollToTop}
//                   className="hover:underline hover:text-gray-200 transition"
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </Box>

//         {/* Contact Info */}
//         <Box>
//           <Typography variant="h6" className="text-xl font-semibold mb-4">Contact Us</Typography>
//           <Typography className="mb-2">123 Logistics Street, Cityname,</Typography>
//           <Typography className="mb-2">Country-PIN</Typography>
//           <Typography>Email: info@adicourier.com</Typography>
//         </Box>

//         {/* Services */}
//         <Box>
//           <Typography variant="h6" className="text-xl font-semibold mb-4">Available Services</Typography>
//           <ul className="space-y-2">
//             <li>E-Commerce Delivery</li>
//             <li>Pickup & Drop</li>
//             <li>Packaging</li>
//             <li>Domestic Services</li>
//           </ul>
//         </Box>
//       </Box>

//       {/* Bottom Bar */}
//       <Box className="mt-10 text-center border-t border-white/30 pt-6 text-sm text-white/90">
//         <Typography>
//           Copyright©2025, Developed by First Track Solution Technologies.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;

import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import logo from '/logo1.png'; // Adjust the path as needed

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Box component="footer" className="bg-red-600 font-bold text-white p-8">
      <Box className="container mx-auto px-2">
        <Box className="flex flex-wrap">
          {/* Company Info */}
          <Box className="w-full md:w-1/4 mb-6 md:mb-0">
            {/* Optional Logo */}
            {/* <Box className="mb-4">
              <img src={logo} alt="ADI Courier Logo" className="w-28 h-auto" />
            </Box> */}
            <Typography variant="h6" className="text-xl font-serif mb-2 hover:underline font-extrabold">
              ADI COURIER SERVICES
            </Typography>
            <Typography className="pr-4 font-normal">
              Delivering excellence in logistics solutions entire PAN India.
              <br /> Your reliable partner for domestic shipping services.
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box className="w-full md:w-1/4 mb-6 md:mb-0 justify-center">
            <Typography variant="h6" className="text-xl font-bold mb-4 hover:underline">Quick Links</Typography>
            <ul className="space-y-2">
              <li><Link to="/faq" onClick={scrollToTop} className="hover:underline">FAQs</Link></li>
              <li><Link to="/about-us" onClick={scrollToTop} className="hover:underline">About Us</Link></li>
              <li><Link to="/contact-us" onClick={scrollToTop} className="hover:underline">Contact Us</Link></li>
              <li><Link to="/privacy" onClick={scrollToTop} className="hover:underline">Privacy & Policy</Link></li>
              <li><Link to="/terms" onClick={scrollToTop} className="hover:underline">Terms of Use</Link></li>
            </ul>
          </Box>

          {/* Contact Info */}
          <Box className="w-full md:w-1/4">
            <Typography variant="h6" className="text-xl font-bold mb-4 hover:underline">Contact Us</Typography>
            <Typography className="mb-2 pr-4">
              123 Logistics Street, Cityname,<br />Country-PIN
            </Typography>
            <Typography className="mt-3 mb-8 md:-mb-4">Email: info@adicourier.com</Typography>
          </Box>

          {/* Available services */}
          <Box className="w-full md:w-1/4 mt-4">
            <Typography variant="h6" className="text-xl font-bold mb-4 hover:underline">Available Services</Typography>
            <ul className="space-y-2">
              <li>E-Commerce Delivery</li>
              <li>Pickup & Drop</li>
              <li>Packaging</li>
              <li>Domestic Services</li>
            </ul>
          </Box>
        </Box>

        <Box className="mt-8 text-center">
          <Typography>
            Copyright@2025, Developed by First Track Solution Technologies
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
