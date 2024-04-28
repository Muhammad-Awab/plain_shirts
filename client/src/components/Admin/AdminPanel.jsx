// In AdminPanel.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import { Modal } from './Modal';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  // Configure Axios baseURL
  axios.defaults.baseURL = 'http://localhost:8080';

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleDelete = async (type, id) => {
    try {
      await axios.delete(`/api/${type === 'product' ? 'products' : 'categories'}/${id}`);
      if (type === 'product') {
        setProducts(products.filter(product => product._id !== id));
      } else if (type === 'category') {
        setCategories(categories.filter(category => category._id !== id));
      }
    } catch (error) {
      console.error(`Error deleting ${type}:`, error);
    }
  };

  const handleEdit = (type, item) => {
    console.log(`Editing ${type}:`, item);
    setModalType(type);
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleAdd = (type) => {
    setModalType(type);
    setSelectedItem(null);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (modalType === 'product') {
        if (selectedItem) {
          await axios.put(`/api/products/${selectedItem.id}`, formData);
        } else {
          await axios.post('/api/products', formData);
        }
        fetchProducts();
      } else if (modalType === 'category') {
        if (selectedItem) {
          await axios.put(`/api/categories/${selectedItem.id}`, formData);
        } else {
          await axios.post('/api/categories', formData);
        }
        fetchCategories();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const productFields = [
    { name: 'name', label: 'Name', required: true },
    { name: 'description', label: 'Description', required: true },
    { name: 'price', label: 'Price', type: 'number', required: true },
    { name: 'quantity', label: 'Quantity', type: 'number' },
    { name: 'image', label: 'Image URL' },
    { name: 'category', label: 'Category' }
  ];

  const categoryFields = [
    { name: 'name', label: 'Name', required: true },
    { name: 'description', label: 'Description', required: true }
  ];

  return (
    <div>
      <h1>Admin Panel</h1>
      <ProductList
        products={products}
        handleEdit={(product) => handleEdit('product', product)}
        handleDelete={(productId) => handleDelete('product', productId)}
        handleAdd={() => handleAdd('product')}
      />
      <CategoryList
        categories={categories}
        handleEdit={(category) => handleEdit('category', category)}
        handleDelete={(categoryId) => handleDelete('category', categoryId)}
        handleAdd={() => handleAdd('category')}
      />
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        onSubmit={handleFormSubmit}
        defaultValue={selectedItem}
        fields={modalType === 'product' ? productFields : categoryFields}
      />
    </div>
  );
};

export default AdminPanel;
