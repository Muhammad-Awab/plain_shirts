import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Modal.css';

export const Modal = ({ isOpen, closeModal, onSubmit, defaultValue, fields, modalType }) => {
  const [formData, setFormData] = useState(defaultValue || {});

  useEffect(() => {
    setFormData(defaultValue || {});
  }, [defaultValue]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (modalType === 'product') {
        if (formData._id) {
          await axios.put(`/api/products/${formData._id}`, formData);
        } else {
          await axios.post('/api/products', formData);
        }
      } else if (modalType === 'category') {
        if (formData._id) {
          await axios.put(`/api/categories/${formData._id}`, formData);
        } else {
          await axios.post('/api/categories', formData);
        }
      }

      onSubmit(formData);
      closeModal();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    isOpen && (
      <div className="modal-container" onClick={closeModal}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <form onSubmit={handleSubmit}>
            {fields.map((field, idx) => (
              <div className="form-group" key={idx}>
                <label htmlFor={field.name}>{field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    required={field.required || false}
                  />
                ) : (
                  <input
                    type={field.type || 'text'}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    required={field.required || false}
                  />
                )}
              </div>
            ))}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  );
};
