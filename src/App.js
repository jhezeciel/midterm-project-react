import React, { useState } from 'react';
import AddItem from './components/AddItem';
import RemoveItem from './components/RemoveItem';
import DisplayItems from './components/DisplayItems';
import SearchItem from './components/SearchItem';
import SortItems from './components/SortItems';
import LowStockItems from './components/LowStockItems';
import { InventoryProvider } from './context/InventoryContext';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState('addItem');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'addItem':
        return <AddItem />;
      case 'removeItem':
        return <RemoveItem />;
      case 'displayItems':
        return <DisplayItems />;
      case 'searchItem':
        return <SearchItem />;
      case 'sortItems':
        return <SortItems />;
      case 'lowStockItems':
        return <LowStockItems />;
      default:
        return <AddItem />;
    }
  };

  return (
    <InventoryProvider>
      <div className="App">
        {/* Sidebar */}
        <div className="sidebar">
          <h2>Inventory System</h2>
          <button onClick={() => setActiveComponent('addItem')}>Add Item</button>
          <button onClick={() => setActiveComponent('removeItem')}>Remove Item</button>
          <button onClick={() => setActiveComponent('displayItems')}>Display Items</button>
          <button onClick={() => setActiveComponent('searchItem')}>Search Item</button>
          <button onClick={() => setActiveComponent('sortItems')}>Sort Items</button>
          <button onClick={() => setActiveComponent('lowStockItems')}>Low Stock Items</button>
        </div>

        {/* Main content area */}
        <div className="content">
          <header className="header">
            <h1>Inventory Management System</h1>
          </header>
          <div className="component-display">
            {renderComponent()}
          </div>
        </div>
      </div>
    </InventoryProvider>
  );
}

export default App;
