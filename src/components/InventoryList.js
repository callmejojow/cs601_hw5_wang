import { useEffect, useState } from 'react';
import InventoryItem from './InventoryItem';
import inventoryData from '../data/inventory.json';
import '../styles/InventoryList.css';

const InventoryList = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        setInventory(inventoryData);
    }, []);

    return (
        <div className="inventory-grid">
            {inventory.map((item) => (
                <InventoryItem key={item.sku} item={item} />
            ))}
        </div>
    );
};

export default InventoryList;
