import React, { useContext, useState } from 'react';
import { InventoryContext } from './context/InventoryContext';

function MainComponent() {
  const { addItem, removeItem } = useContext(InventoryContext);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [message, setMessage] = useState('');

  const handleAddItem = () => {
    if (id && name && quantity > 0 && price > 0) {
      addItem({ id, name, quantity, price });
      setMessage('Item added successfully!');

    } else {
      setMessage('Please fill in all fields with valid values.');
    }
  };

  const handleRemoveItem = () => {
    if (id) {
      removeItem(id);
      setMessage('Item removed successfully!');

    } else {
      setMessage('Please enter a valid ID.');
    }
  };

  return (
    <div>
      <h2>Manage Inventory</h2>
      <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={handleRemoveItem}>Remove Item</button>
      {message && <p>{message}</p>} {/* Feedback message */}
    </div>
  );
}

export default MainComponent;
