// EditForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditForm = ({ closeModal, type, selectedItem }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    image: '',
    category: '',
  });

  useEffect(() => {
    if (selectedItem) {
      setFormData(selectedItem);
    }
  }, [selectedItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/${type}s/${selectedItem._id}`, formData);
      closeModal();
    } catch (error) {
      console.error('Error editing', type, ':', error);
    }
  };

  return (
    <div>
      <h2>Edit {type}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Description:</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} required />

        <label>Price:</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} required />

        {type === 'product' && (
          <>
            <label>Quantity:</label>
            <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
          </>
        )}

        {type === 'product' && (
          <>
            <label>Image:</label>
            <input type="text" name="image" value={formData.image} onChange={handleChange} />
          </>
        )}

        {type === 'product' && (
          <>
            <label>Category:</label>
            <input type="text" name="category" value={formData.category} onChange={handleChange} required />
          </>
        )}

        <button type="submit">Update {type}</button>
        <button onClick={closeModal}>Cancel</button>
      </form>
    </div>
  );
};

export default EditForm;
