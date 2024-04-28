import React from 'react';
import './Table.css';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';

const ProductTable = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Image Url</th>
            <th>Category</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td>{row.name}</td>
              <td>{row.description}</td>
              <td>{row.price}</td>
              <td>{row.quantity}</td>
              <td>{row.image}</td>
              <td>{row.category}</td>
              <td>
                <BsFillPencilFill
                  className="edit-btn"
                  onClick={() => editRow(row)}
                />
              </td>
              <td>
                <BsFillTrashFill
                  className="delete-btn"

                  onClick={() => deleteRow(row.id)} // Corrected parameter
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
