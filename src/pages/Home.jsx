import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Offer from '../components/Offer';
import AboutSection from '../components/AboutSection';
import ChooseUs from '../components/ChooseUs';
import Superiority from '../components/Superiority';
import IndustryExpertise from '../components/IndustryExpertise';
import ShippingCalculator from '../components/ShippingCalculator';
import Testimonial from '../components/Testimonial';
import TrustedPartners from '../components/TrustedPartners';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <Offer/>
      <AboutSection/>
      <ChooseUs/>
      <Superiority/>
      <IndustryExpertise/>
      <ShippingCalculator/>
      <Testimonial/>
      <TrustedPartners/>
    </>
  );
};

export default Home;
