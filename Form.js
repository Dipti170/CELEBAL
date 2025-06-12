import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const countries = {
  India: ['Delhi', 'Mumbai', 'Bangalore'],
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
    const err = {};
    if (!formData.firstName) err.firstName = 'Required';
    if (!formData.lastName) err.lastName = 'Required';
    if (!formData.username) err.username = 'Required';
    if (!formData.email || !formData.email.includes('@')) err.email = 'Invalid';
    if (!formData.password) err.password = 'Required';
    if (!formData.phoneCode) err.phoneCode = 'Required';
    if (!formData.phoneNumber) err.phoneNumber = 'Required';
    if (!formData.country) err.country = 'Required';
    if (!formData.city) err.city = 'Required';
    if (!formData.pan) err.pan = 'Required';
    if (!formData.aadhar) err.aadhar = 'Required';
    return err;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      console.log("✅ Form submitted:", formData);
      navigate('/success', { state: formData });
    } else {
      console.log("❌ Validation errors:", err);
    }
  };

  const cities = formData.country ? countries[formData.country] : [];

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', background: '#eee' }}>
      <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
      <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input
        name="password"
        placeholder="Password"
        type={showPassword ? 'text' : 'password'}
        value={formData.password}
        onChange={handleChange}
      />
      <button type="button" onClick={() => setShowPassword(p => !p)}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
      <input name="phoneCode" placeholder="Code" value={formData.phoneCode} onChange={handleChange} />
      <input name="phoneNumber" placeholder="Phone" value={formData.phoneNumber} onChange={handleChange} />
      <select name="country" value={formData.country} onChange={handleChange}>
        <option value="">Select Country</option>
        {Object.keys(countries).map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <select name="city" value={formData.city} onChange={handleChange}>
        <option value="">Select City</option>
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
      <input name="pan" placeholder="PAN No." value={formData.pan} onChange={handleChange} />
      <input name="aadhar" placeholder="Aadhar No." value={formData.aadhar} onChange={handleChange} />
      <button type="submit" disabled={false}>Submit</button>

    </form>
  );
};

export default Form;
