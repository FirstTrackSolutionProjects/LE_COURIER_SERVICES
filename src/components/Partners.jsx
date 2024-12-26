import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const API_URL = import.meta.env.VITE_APP_API_URL
const Partners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  
  const images = [
    "/partners/delhivery.jpeg",
    "/partners/gati.png",
    "/partners/aws.avif",
    "/partners/netlify.png",
    "/partners/zoho.jpeg"
  ]

  return (
    <div className="w-full p-4 my-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-sky-950">Our Trusted Partners</h2>
        {/*<p className="text-gray-600">Here are some images sliding automatically.</p>*/}
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2 md:mx-20">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-20 md:w-72 md:h-36 rounded shadow-lg " />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partners;
