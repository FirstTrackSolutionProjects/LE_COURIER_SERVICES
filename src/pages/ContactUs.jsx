import React from 'react';
import contactImage from '/contact-image.jpg';

const ContactUs = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      {/* Top Image */}
      <div className="max-w-4xl mx-auto mb-8">
        <img
          src={contactImage}
          alt="Contact Us"
          className="w-full h-68 object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
        <p className="text-lg text-gray-600 mt-2">
          We're here to help! Feel free to reach out to us with any questions or concerns.
        </p>
      </div>

      {/* Form + Info */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-gray-100 rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
             <div className="flex space-x-2">
              <select
                className="w-1/5 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">STD Code</option>
                  <option value="+91">+91 (India)</option>
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+61">+61 (Australia)</option>
                  <option value="+81">+81 (Japan)</option>
                </select>
            
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-4/5 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-blue-900 text-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p className="mb-3">
            <strong>Address:</strong> 19, Nav Vyapar Bhavan, 45 PD Mello Road,<br/> Next to ICICI Bank, Masjid East, Mumbai-400009
          </p>
          <p className="mb-3">
            <strong>Phone:</strong> +91 1234567890
          </p>
          <p className="mb-3">
            <strong>Email:</strong> info@shiprunway.com
          </p>
          <p className="mb-3">
            <strong>Working Hours:</strong> Mon-Fri: 9 AM - 6 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
