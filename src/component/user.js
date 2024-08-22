import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import im from './6310507.jpg';
import Nav from './nav';

const Form = ({ setIsRegistered }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    institute: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  });

  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    let errors = { fullName: '', email: '', phoneNumber: '' };

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Phone number must be 10 digits';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const apiUrl = process.env.REACT_APP_BACKEND_URL;
        await axios.post(`${apiUrl}/api/user/register`, formData, { withCredentials: true });
        navigate('/enr');
      } catch (error) {
        console.error('Error registering user:', error);
      }
    }
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen flex flex-col md:flex-row overflow-x-hidden">
        
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <img src={im} alt="Form" className="object-cover w-full h-full md:max-h-screen" />
        </div>

        
        <div className="md:w-1/2 w-full flex items-center justify-center p-4 bg-gray-50">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Register Now</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`peer w-full px-3 py-3 placeholder-transparent border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Full Name"
                  required
                />
                <label
                  htmlFor="fullName"
                  className="absolute left-3 -top-3 text-gray-700 text-sm bg-white px-1 transition-all transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:bg-white"
                >
                  Full Name
                </label>
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`peer w-full px-3 py-3 placeholder-transparent border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Email"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 -top-3 text-gray-700 text-sm bg-white px-1 transition-all transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:bg-white"
                >
                  Email
                </label>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`peer w-full px-3 py-3 placeholder-transparent border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Phone Number"
                  required
                />
                <label
                  htmlFor="phoneNumber"
                  className="absolute left-3 -top-3 text-gray-700 text-sm bg-white px-1 transition-all transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:bg-white"
                >
                  Phone Number
                </label>
                {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="institute"
                  name="institute"
                  value={formData.institute}
                  onChange={handleChange}
                  className="peer w-full px-3 py-3 placeholder-transparent border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                  placeholder="Institute"
                />
                <label
                  htmlFor="institute"
                  className="absolute left-3 -top-3 text-gray-700 text-sm bg-white px-1 transition-all transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:bg-white"
                >
                  Institute
                </label>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
