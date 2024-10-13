import React, { useContext, useState } from 'react';
import { InventoryContext } from '../context/InventoryContext';
import { validateItem } from '../validations/itemValidation';

const AddItem = () => {
    const { addItem } = useContext(InventoryContext);
    const [item, setItem] = useState({ id: '', name: '', quantity: 0, price: 0, category: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        // Update item state; convert numeric fields to numbers
        setItem({
          ...item,
          [name]: name === 'quantity' || name === 'price' ? parseFloat(value) : value
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateItem(item);
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
        } else {
            addItem(item);
            alert('Item added successfully!');
            setItem({ id: '', name: '', quantity: 0, price: 0, category: '' });
        }
    };

    return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID</label>
          <input
            type="text"
            name="id"
            id="id"
            placeholder="Enter ID"
            value={item.id}
            onChange={handleChange}
          />
          {errors.id && <span className="error-message">{errors.id}</span>}
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            value={item.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            placeholder="Enter Quantity"
            value={item.quantity}
            onChange={handleChange}
          />
          {errors.quantity && <span className="error-message">{errors.quantity}</span>}
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Enter Price"
            value={item.price}
            onChange={handleChange}
          />
          {errors.price && <span className="error-message">{errors.price}</span>}
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select name="category" id="category" value={item.category} onChange={handleChange}>
            <option value="">Select Category</option>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          {errors.category && <span className="error-message">{errors.category}</span>}
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;