import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import register from "../services/register";
import { useAuth } from "../context/AuthContext";
import EmailOTPVerificationModal from "../components/Modals/EmailOTPVerificationModal";
import registerImage from '/register-image.jpg';

const Register = () => {
  const { isAuthenticated, login, verified, emailVerified } = useAuth();
  const [emailModalOpen, setEmailModalOpen] = useState(false)
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    reg_email: "",
    reg_password: "",
    confirm_password: "",
    business_name: "",
    mobile: "",
  });
  const closeEmailModal = () => {
    setEmailModalOpen(false);
  }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const validate = () => {
    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      toast.error("Name should only contain letters and spaces");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.reg_email)) {
      toast.error("Invalid email format");
      return false;
    }

    if (formData.reg_password.length < 4) {
      toast.error("Password must be at least 4 characters long");
      return false;
    }

    if (formData.reg_password !== formData.confirm_password) {
      toast.error("Passwords do not match");
      return false;
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      toast.error("Mobile number must be 10 digits long");
      return false;
    }

    return true;
  };
  useEffect(()=>{
    console.log("validation", isAuthenticated)
    if (isAuthenticated && verified){
      navigate("/dashboard")
    } else if (isAuthenticated && emailVerified){
      navigate("/verify")
    } else if (isAuthenticated){
      setEmailModalOpen(true);
    }
  },[isAuthenticated])

  const handleSubmit = async (e) => {
    e.preventDefault();
      setLoading(true);
      if (!validate()) {
        setLoading(false);
        return;
      };
      try {
        const registerResponse = await register(formData)
        if (registerResponse?.success) {
          toast.success("User registered successfully!");
          await login(registerResponse?.token)
        } else {
          toast.error(registerResponse?.message || "Registration failed, please try again.");
        }
      } catch (err) {
        toast.error("Unexpected Error Occured");
      } finally {
        setLoading(false);
      }
  };

  return (
    <>
    {emailModalOpen && <EmailOTPVerificationModal open={emailModalOpen} onClose={closeEmailModal} />}
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

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-5/6 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
           

            <input
              type="email"
              placeholder="Email"
              name="reg_email"
              value={formData.reg_email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="password"
              placeholder="Password"
              name="reg_password"
              value={formData.reg_password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="text"
              placeholder="Business Name"
              name="business_name"
              value={formData.business_name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-900 text-white font-semibold py-3 rounded-md hover:bg-blue-950 transition"
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-700">
              Already have an account?{' '}
              <Link to="/sign-in" className="text-red-600 font-semibold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
