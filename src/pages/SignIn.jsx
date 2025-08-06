import React from 'react';
import signInImage from '/signin-image.jpg'; // Update the path accordingly
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="w-full h-60 object-cover rounded-xl mb-6"
            src={signInImage}
            alt="Sign In Banner"
          />
        </div>

        <div className="bg-gray-100 shadow-md rounded-xl p-8">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Sign In</h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 rounded-md font-semibold hover:bg-blue-800 transition"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-700">
              Don't have an account?{' '}
              <Link to="/register" className="text-red-600 font-semibold hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
