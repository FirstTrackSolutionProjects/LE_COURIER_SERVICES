import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Rahul Mehra',
    role: 'CEO, TechFlow India',
    feedback:
      'First Track transformed our shipping process. Their platform is fast, reliable, and incredibly user-friendly.',
    avatar: '/male.jpg',
  },
  {
    name: 'Anjali Sharma',
    role: 'Operations Manager, BharatGoods',
    feedback:
      'We’ve experienced outstanding service and prompt deliveries. Highly recommended!',
    avatar: '/female.jpg',
  },
  {
    name: 'Vikram Patel',
    role: 'Logistics Lead, QuickKart',
    feedback:
      'The best logistics partner we’ve worked with. Seamless integrations and great customer support.',
    avatar: '/male.jpg',
  },
  {
    name: 'Neha Verma',
    role: 'Marketing Head, Desi Innovations',
    feedback:
      'Their services have exceeded our expectations. Smooth operations and fantastic support!',
    avatar: '/female.jpg',
  },
  {
    name: 'Amit Khanna',
    role: 'Founder, Khanna Enterprises',
    feedback:
      'First Track has been a game-changer for our business. We trust them with all our deliveries.',
    avatar: '/male.jpg',
  },
];

const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
  };

  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-10">
          What Our Clients Say
        </h2>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="bg-white border rounded-xl shadow p-6 max-w-xl w-full mx-auto">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-700 mb-4 italic">
                  “{testimonial.feedback}”
                </p>
                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
