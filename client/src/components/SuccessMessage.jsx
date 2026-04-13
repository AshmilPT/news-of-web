import React from 'react';

const SuccessMessage = ({ onReset }) => {
  return (
    <div className="success-container">
      <div className="success-icon">✓</div>
      <h2>Request Received!</h2>
      <p>Your web development request has been recorded. We will contact with you shortly.</p>
      <button className="btn-secondary" onClick={onReset}>Submit Another Request</button>
    </div>
  );
};

export default SuccessMessage;
