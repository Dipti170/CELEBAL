import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const countries = {
  India: ['Mumbai', 'Delhi', 'Bangalore'],
  USA: ['New York', 'Los Angeles', 'Chicago'],
};

const Form = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneCode: '',
    phoneNumber: '',
    country: '',
    city: '',
    pan: '',
    aadhar: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email))
      newErrors.email = 'Valid email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.phoneCode) newErrors.phoneCode = 'Country code required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.pan) newErrors.pan = 'PAN number is required';
    if (!formData.aadhar) newErrors.aadhar = 'Aadhar number is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      navigate('/success', { state: formData });
    }
  };

  const cities = formData.country ? countries[formData.country] : [];

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-xl mx-auto">
      {/* Input fields */}
      {/* Use same code you already wrote */}
    </form>
  );
};

export default Form;


