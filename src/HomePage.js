import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToPayment = () => {
    navigate('/donate');
  };

  return (
    <div className="container" style={{ marginTop: '6rem', textAlign: 'center', fontFamily: 'Arial', color: '#2B3964' }}>
      <h4 style={{ fontSize: '60px' }}>Home Page</h4>
      <button onClick={navigateToPayment} className="btn btn-primary" style={{ marginTop: '2rem' }}>
        Go to Donate Page
      </button>
    </div>
  );
};

export default HomePage;
