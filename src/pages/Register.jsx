import React from 'react';
import registerImage from '/register-image.jpg';

const Register = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-md mx-auto px-4">
        {/* Top Image */}
        <img
          src={registerImage}
          alt="Register Banner"
          className="w-full max-h-64 object-cover rounded-xl mb-8"
        />

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-lg">
          <h2 className="text-3xl font-bold text-center text-black mb-6">Create Account</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

             <div className="flex space-x-2">
               <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white">
                <span className="text-xl mr-2">🇮🇳</span>
                <span className="text-gray-800">+91</span>
              </div>
            
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-5/6 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
           

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="text"
              placeholder="Business Name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <button
              type="submit"
              className="w-full bg-blue-900 text-white font-semibold py-3 rounded-md hover:bg-blue-950 transition"
            >
              Register
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-700">
              Already have an account?{' '}
              <a href="/sign-in" className="text-red-600 font-semibold hover:underline">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
