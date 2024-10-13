import React, { useContext, useState } from 'react';
import { InventoryContext } from '../context/InventoryContext';

const SearchItem = () => {
    const { inventory } = useContext(InventoryContext);
    const [id, setId] = useState('');
    const [foundItem, setFoundItem] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        const item = inventory.find(item => item.id === id);
        if (item) {
            setFoundItem(item);
        } else {
            setFoundItem(null);
            alert('Item not found!');
        }
        setId('');
    };

    return (
        <div className="search-item-container">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Enter ID to search" 
                    value={id} 
                    onChange={e => setId(e.target.value)} 
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {foundItem && (
                <div className="item-details">
                    <h3 className="item-details-title">Item Details</h3>
                    <div className="item-detail">
                        <span className="item-detail-label">ID:</span>
                        <span className="item-detail-value">{foundItem.id}</span>
                    </div>
                    <div className="item-detail">
                        <span className="item-detail-label">Name:</span>
                        <span className="item-detail-value">{foundItem.name}</span>
                    </div>
                    <div className="item-detail">
                        <span className="item-detail-label">Quantity:</span>
                        <span className="item-detail-value">{foundItem.quantity}</span>
                    </div>
                    <div className="item-detail">
                        <span className="item-detail-label">Price:</span>
                        <span className="item-detail-value">${foundItem.price}</span>
                    </div>
                    <div className="item-detail">
                        <span className="item-detail-label">Category:</span>
                        <span className="item-detail-value">{foundItem.category}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchItem;
