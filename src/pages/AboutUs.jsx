import React from 'react';
import aboutImage from '/about-image.jpg'; // Update the path if necessary

const AboutUs = () => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Banner Image */}
        <img
          src={aboutImage}
          alt="About Us Banner"
          className="w-full max-h-[400px] object-cover rounded-lg mb-8"
        />

        {/* Main Title */}
        <h1 className="text-4xl font-bold text-center text-black mb-4">About Us</h1>
        <p className="text-xl text-center text-black mb-8">
          Delivering Excellence in Domestic Logistics
        </p>

        {/* Company Overview Section */}
        <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 mb-8">
  
          <p className="text-gray-800">
            <strong> Rameshwar Cargo India Pvt. Ltd.</strong>, founded in <strong>June 2023</strong>, is a fast-growing logistics company  <span className="text-blue-700 font-bold"> Ship</span>
              <span className="text-orange-600 font-bold"> Runway</span> Courierdedicated to providing
            seamless and efficient domestic delivery solutions across India. With a focus on innovation and customer satisfaction, we’ve
            become a trusted logistics aggregator that bridges businesses and customers through smart, reliable, and cost-effective services.
          </p>
        </div>

        {/* Mission and Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-black mb-2">Our Mission</h2>
            <p className="text-gray-800">
              To revolutionize domestic logistics by connecting businesses and customers through innovative technology and exceptional service. 
              We ensure efficiency, transparency, and reliability in every shipment.
            </p>
          </div>

          <div className="bg-gray-100 border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-black mb-2">Our Vision</h2>
            <p className="text-gray-800">
              To be the leading domestic logistics aggregator, empowering businesses and individuals with seamless, cost-effective, 
              and eco-friendly delivery solutions.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-blue-700 text-white text-center p-8 rounded-lg mt-10">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg">
            We bring together a network of trusted logistics providers, cutting-edge tracking systems, 
            and unparalleled customer support to ensure your parcels are delivered on time, every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
