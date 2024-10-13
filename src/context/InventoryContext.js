import React, { createContext, useState } from 'react';

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);

  const addItem = (item) => {
    setInventory([...inventory, item]);
  };

  const removeItem = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  return (
    <InventoryContext.Provider value={{ inventory, addItem, removeItem }}>
      {children}
    </InventoryContext.Provider>
  );
};


