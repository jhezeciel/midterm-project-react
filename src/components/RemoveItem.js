import React, { useState, useContext } from 'react';
import { InventoryContext } from '../context/InventoryContext';

const RemoveItem = () => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');
  const { inventory, removeItem } = useContext(InventoryContext);

  const handleRemoveItem = () => {
    const item = inventory.find(item => item.id === id);
    if (item) {
      removeItem(id);
      setMessage(`Item ${item.name} has been removed from the inventory.`);
    } else {
      setMessage('Item not found!');
    }
  };

  return (
    <div className="remove-item-form">
      <h2>Remove Item</h2>
      <label>ID</label>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleRemoveItem}>Remove Item</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RemoveItem;
