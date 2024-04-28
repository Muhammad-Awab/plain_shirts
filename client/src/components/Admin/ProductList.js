// ProductList.js
import React from 'react';
import ProductTable from './ProductTable';

const ProductList = ({ products, handleEdit, handleDelete, handleAdd }) => {
  const rows = products.map(product => ({
    id: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: product.quantity,
    image: product.image,
    category: product.category,
  }));

  return (
    <div>
      <h2>Products</h2>
      <ProductTable
        rows={rows}
        deleteRow={handleDelete}
        editRow={handleEdit}
      />
      <button onClick={handleAdd}>Add Product</button>
    </div>
  );
};

export default ProductList;
