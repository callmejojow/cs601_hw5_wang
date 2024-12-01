import '../css/InventoryItem.css';
const InventoryItem = ({ sku, name, qty, price }) => {
    return (
        <div className="inventory-item">
            <h3>{name}</h3>
            <p>SKU: {sku}</p>
            <p>Quantity: {qty}</p>
            <p>Price: ${price.toFixed(2)}</p>
        </div>
    );
};

export default InventoryItem;
