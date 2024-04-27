// AdminPanel.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import Modal from './Modal';
import AddForm from './AddForm';
import EditForm from './EditForm';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
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

  const handleEditProduct = (productId) => {
    // Implement edit functionality
    const product = products.find(p => p.id === productId);
    setSelectedProduct(product);
    setEditModalOpen(true);
  };

  const handleDeleteProduct = async (productId) => {
    // Implement delete functionality
    try {
      await axios.delete(`/api/products/${productId}`);
      fetchProducts(); // Refresh product list
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleAddProduct = () => {
    // Implement add functionality
    setAddModalOpen(true);
  };

  const handleEditCategory = (categoryId) => {
    // Implement edit functionality
    const category = categories.find(c => c.id === categoryId);
    setSelectedCategory(category);
    setEditModalOpen(true);
  };

  const handleDeleteCategory = async (categoryId) => {
    // Implement delete functionality
    try {
      await axios.delete(`/api/categories/${categoryId}`);
      fetchCategories(); // Refresh category list
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleAddCategory = () => {
    // Implement add functionality
    setAddModalOpen(true);
  };

  const closeModal = () => {
    setAddModalOpen(false);
    setEditModalOpen(false);
    setSelectedProduct(null);
    setSelectedCategory(null);
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <ProductList
        products={products}
        handleEdit={handleEditProduct}
        handleDelete={handleDeleteProduct}
        handleAdd={handleAddProduct}
      />
      <CategoryList
        categories={categories}
        handleEdit={handleEditCategory}
        handleDelete={handleDeleteCategory}
        handleAdd={handleAddCategory}
      />
      <Modal isOpen={isAddModalOpen || isEditModalOpen} closeModal={closeModal}>
        {isAddModalOpen ? <AddForm closeModal={closeModal} type="product" /> : <EditForm closeModal={closeModal} type="product" selectedItem={selectedProduct} />}
        {isAddModalOpen ? <AddForm closeModal={closeModal} type="category" /> : <EditForm closeModal={closeModal} type="category" selectedItem={selectedCategory} />}
      </Modal>
    </div>
  );
};

export default AdminPanel;
