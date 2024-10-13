import React, { useContext } from 'react';
import { InventoryContext } from '../context/InventoryContext';

const DisplayItems = () => {
    const { inventory } = useContext(InventoryContext);

    return (
        <div>
            <h2>All Inventory Items</h2>
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
                    {inventory.length > 0 ? inventory.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="5">No items available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayItems;
