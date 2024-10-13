import React, { useContext } from 'react';
import { InventoryContext } from '../context/InventoryContext';

const LowStockItems = () => {
  const { inventory } = useContext(InventoryContext);
  const lowStockItems = inventory.filter(item => item.quantity <= 5);

  return (
    <div className="low-stock-items">
      <h2>Low Stock Items</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {lowStockItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LowStockItems;
