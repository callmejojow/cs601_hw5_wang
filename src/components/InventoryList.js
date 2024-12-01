import { useEffect, useState } from 'react';
import InventoryItem from './InventoryItem';
import inventoryData from '../data/inventory.json';

const InventoryList = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        setInventory(inventoryData);
    }, []);

    return (
        <div className="inventory-list">
            {inventory.map((item) => (
                <InventoryItem key={item.sku} {...item} />
            ))}
        </div>
    );
};

export default InventoryList;
