// CategoryList.js
import React from 'react';

const CategoryList = ({ categories, handleEdit, handleDelete, handleAdd }) => {
  return (
    <div>
      <h2>Categories</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>
                <button onClick={() => handleEdit(category.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(category.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAdd}>Add Category</button>
    </div>
  );
};

export default CategoryList;