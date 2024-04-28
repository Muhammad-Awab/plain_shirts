import React, { useState } from "react";

import "./Modal.css";

export const Modal = ({ isOpen, closeModal, onSubmit, defaultValue, fields }) => {
  const [formState, setFormState] = useState(
    defaultValue || {}
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    const requiredFields = fields.filter(field => field.required);
    const missingFields = requiredFields.filter(field => !formState[field.name]);
    if (missingFields.length === 0) {
      setErrors("");
      return true;
    } else {
      setErrors(`Please include: ${missingFields.map(field => field.label).join(", ")}`);
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    isOpen && (
      <div
        className="modal-container"
        onClick={(e) => {
          if (e.target.className === "modal-container") closeModal();
        }}
      >
        <div className="modal">
          <form onSubmit={handleSubmit}>
            {fields.map(field => (
              <div className="form-group" key={field.name}>
                <label htmlFor={field.name}>{field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    onChange={handleChange}
                    value={formState[field.name] || ''}
                  />
                ) : (
                  <input
                    type={field.type || 'text'}
                    name={field.name}
                    onChange={handleChange}
                    value={formState[field.name] || ''}
                  />
                )}
              </div>
            ))}
            {errors && <div className="error">{errors}</div>}
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      </div>
    )
  );
};
