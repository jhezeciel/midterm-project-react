import React, { useState, useContext } from 'react';
import { InventoryContext } from '../context/InventoryContext';

const UpdateItem = () => {
  const [id, setId] = useState('');
  const [field, setField] = useState('quantity');
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');
  const { inventory, updateItem } = useContext(InventoryContext);

  const handleUpdateItem = () => {
    const item = inventory.find(item => item.id === id);
    if (item) {
      const oldValue = item[field];
      updateItem(id, field, newValue);
      setMessage(`Item ${item.name} ${field} updated from ${oldValue} to ${newValue}`);
    } else {
      setMessage('Item not found!');
    }
  };

  return (
    <div className="update-item-form">
      <h2>Update Item</h2>
      <label>ID</label>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <label>Field to Update</label>
      <select value={field} onChange={(e) => setField(e.target.value)}>
        <option value="quantity">Quantity</option>
        <option value="price">Price</option>
      </select>
      <label>New Value</label>
      <input type="number" value={newValue} onChange={(e) => setNewValue(e.target.value)} />
      <button onClick={handleUpdateItem}>Update Item</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateItem;
