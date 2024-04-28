// CategoryList.js
import React from 'react';
import Table from './Table';

const CategoryList = ({ categories, handleEdit, handleDelete, handleAdd }) => {
  const rows = categories.map(category => ({
    id: category._id,
    name: category.name,
    description: category.description,
    price: '', // Categories don't have a price
    quantity: '', // Categories don't have a quantity
    category: '', // Categories don't belong to another category
  }));

  return (
    <div>
      <h2>Categories</h2>
      <Table
        rows={rows}
        deleteRow={handleDelete}
        editRow={handleEdit}
      />
      <button onClick={handleAdd}>Add Category</button>
    </div>
  );
};

export default CategoryList;