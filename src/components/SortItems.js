import React, { useContext, useState } from 'react';
import { InventoryContext } from '../context/InventoryContext';

const SortItems = () => {
    const { inventory } = useContext(InventoryContext);
    const [sortBy, setSortBy] = useState('quantity');
    const [order, setOrder] = useState('ascending');
    const [sortedItems, setSortedItems] = useState([...inventory]);

    const handleSort = (e) => {
        e.preventDefault();
        const sorted = [...inventory].sort((a, b) => {
            if (sortBy === 'quantity') {
                return order === 'ascending' ? a.quantity - b.quantity : b.quantity - a.quantity;
            } else {
                return order === 'ascending' ? a.price - b.price : b.price - a.price;
            }
        });
        setSortedItems(sorted);
    };

    return (
        <div>
            <form onSubmit={handleSort}>
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value="quantity">Quantity</option>
                    <option value="price">Price</option>
                </select>
                <select value={order} onChange={e => setOrder(e.target.value)}>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
                <button type="submit">Sort Items</button>
            </form>

            <h2>Sorted Items</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SortItems;
