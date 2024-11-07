import React, { useState } from 'react';
import FormField from './FormField';


const WebsiteForm = () => {
  const [formData, setFormData] = useState({
    websiteTitle: '',
    businessCategory: '',
    subDomain: '',
    countryCode: '',
    phoneNumber: '',
    city: '',
    postalAddress: '',
    postalCode: '',
    logo: null,
    businessDescription: '',
    showAddress: false
  });

 
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };


  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="website-form">
        <h2>Create Your Website</h2>
        <p className="form-subtitle">Please fill in the details to get started.</p>

       
        <FormField
          label="Website Title"
          placeholder="Enter your website or business name"
          required
          name="websiteTitle"
          value={formData.websiteTitle}
          onChange={handleChange}
        />

        <FormField
          label="Business Category"
          placeholder="e.g., Local Business"
          required
          name="businessCategory"
          value={formData.businessCategory}
          onChange={handleChange}
        />

        <FormField
          label="Sub-domain"
          placeholder="example.websites.co.in"
          name="subDomain"
          value={formData.subDomain}
          onChange={handleChange}
        />

        
        <div className="form-row">
          <FormField
            label="Country Code"
            placeholder="+0 (AX)"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
          />
          <FormField
            label="Phone Number"
            placeholder="Your phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

      
        <FormField
          label="City"
          placeholder="Your city or location"
          required
          name="city"
          value={formData.city}
          onChange={handleChange}
        />

       
        <FormField
          label="Postal Address"
          placeholder="Street address, building, etc."
          name="postalAddress"
          value={formData.postalAddress}
          onChange={handleChange}
        />
        <FormField
          label="Postal Code"
          placeholder="Enter your postal code"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
        />

      
        <FormField
          label="Upload Logo"
          placeholder="Drag & drop or select a logo image"
          isImage
          name="logo"
          onChange={handleFileChange}
        />
        
        
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="show-address"
            name="showAddress"
            checked={formData.showAddress}
            onChange={handleChange}
          />
          <label htmlFor="show-address">Show address on your website</label>
        </div>

        <button type="submit" className="submit-button">Create Website</button>
      </form>
    </div>
  );
};

export default WebsiteForm;
