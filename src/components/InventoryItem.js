import { Link } from 'react-router-dom';
import '../css/InventoryItem.css';

const InventoryItem = ({ item }) => {
    return (
        <Link to={`/product/${item.sku}`} className="inventory-item">
            <h3>{item.name}</h3>
            <p>SKU: {item.sku}</p>
            <p>Quantity: {item.qty}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
        </Link>
    );
};

export default InventoryItem;
