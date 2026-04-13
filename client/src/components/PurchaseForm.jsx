import React, { useState } from 'react';
import SuccessMessage from './SuccessMessage';

const PurchaseForm = ({ onViewChange }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    serviceType: 'Landing Page',
    customAppName: '',
    businessDetails: '',
    phoneNumber: '',
    prdFile: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Restrict name to letters only
    if (name === 'fullName' || name === 'customAppName') {
      const sanitized = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData((prev) => ({
        ...prev,
        [name]: sanitized,
      }));
      return;
    }

    // Restrict phone number to digits only
    if (name === 'phoneNumber') {
      const sanitized = value.replace(/\D/g, '');
      setFormData((prev) => ({
        ...prev,
        [name]: sanitized,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const submitData = new FormData();
      submitData.append('fullName', formData.fullName);
      submitData.append('serviceType', formData.serviceType);
      submitData.append('customAppName', formData.customAppName);
      submitData.append('businessDetails', formData.businessDetails);
      submitData.append('phoneNumber', formData.phoneNumber);
      submitData.append('prdFile', formData.prdFile);

      const response = await fetch('/api/orders', {
        method: 'POST',
        body: submitData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit order');
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      serviceType: 'Landing Page',
      customAppName: '',
      businessDetails: '',
      phoneNumber: '',
      prdFile: null,
    });
    setSuccess(false);
  };

  if (success) {
    return (
      <div className="form-wrapper">
        <SuccessMessage onReset={resetForm} />
        <button 
          className="btn-secondary" 
          style={{ marginTop: '1rem', width: '100%' }}
          onClick={() => onViewChange('dashboard')}
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="form-wrapper">
      <div className="form-header">
        <h1>New <span className="gradient-text">NAXA_WEB</span> Request</h1>
        <p>Premium development for your web projects.</p>
      </div>

      <form className="purchase-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input 
            type="text" 
            id="fullName" 
            name="fullName" 
            placeholder="Enter your full name"
            value={formData.fullName} 
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="serviceType">Service Type</label>
          <select 
            id="serviceType" 
            name="serviceType" 
            value={formData.serviceType} 
            onChange={handleChange}
            required
          >
            <option value="Landing Page">Landing Page</option>
            <option value="E-commerce">E-commerce Site</option>
            <option value="Portfolio">Portfolio / Resume</option>
            <option value="Custom Web App">Custom Web App</option>
          </select>
        </div>

        {formData.serviceType === 'Custom Web App' && (
          <div className="form-group">
            <label htmlFor="customAppName">Custom App Name/Type</label>
            <input 
              type="text" 
              id="customAppName" 
              name="customAppName" 
              placeholder="What kind of app?"
              value={formData.customAppName} 
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="businessDetails">Project Details</label>
          <textarea 
            id="businessDetails" 
            name="businessDetails" 
            placeholder="Briefly describe your project or business"
            value={formData.businessDetails} 
            onChange={handleChange}
            required
            rows="3"
          />
        </div>

        <div className="form-group">
          <label htmlFor="prdFile">Upload Your PRD (Project Requirements)</label>
          <input 
            type="file" 
            id="prdFile" 
            name="prdFile" 
            className="file-input"
            onChange={(e) => setFormData(prev => ({ ...prev, prdFile: e.target.files[0] }))}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input 
            type="tel" 
            id="phoneNumber" 
            name="phoneNumber" 
            placeholder="Numbers only (e.g. 1234567890)"
            value={formData.phoneNumber} 
            onChange={handleChange}
            required
          />
        </div>



        {error && <div className="error-message">Error: {error}</div>}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? 'Processing...' : 'Submit Request'}
          </button>
          
          <button 
            type="button" 
            className="btn-secondary" 
            style={{ width: '100%' }}
            onClick={() => onViewChange('dashboard')}
          >
            ← Back to Dashboard
          </button>
        </div>
      </form>
    </div>
  );
};

export default PurchaseForm;
