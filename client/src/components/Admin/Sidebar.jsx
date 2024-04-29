// Sidebar.jsx

import React from 'react';
import './Sidebar.css'

const Sidebar = ({ setActiveSection }) => {
  return (
    <div className="sidebar">
      <button onClick={() => setActiveSection('products')}>Products</button>
      <button onClick={() => setActiveSection('categories')}>Categories</button>
      {/* Add more buttons for other sections */}
    </div>
  );
};

export default Sidebar;
