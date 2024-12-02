import { Link } from 'react-router-dom';
import '../styles/InventoryItem.css';

//For each item in the inventory, I create a link to the product detail page
//Description and image are not included in the link
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
