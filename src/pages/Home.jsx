import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import AboutSection from '../components/AboutSection';
import ChooseUs from '../components/ChooseUs';
import Superiority from '../components/Superiority';
import Testimonial from '../components/Testimonial';
import TrustedPartners from '../components/TrustedPartners';
const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <AboutSection/>
      <ChooseUs/>
      <Superiority/>
      <Testimonial/>
      <TrustedPartners/>
    </>
  );
};

export default Home;
