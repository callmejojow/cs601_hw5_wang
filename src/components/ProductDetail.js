import { useParams } from 'react-router-dom';
import inventoryData from '../data/inventory.json';
import '../css/ProductDetail.css';

const ProductDetail = () => {
    const { sku } = useParams();
    const product = inventoryData.find((item) => item.sku === sku);

    if (!product) {
        return <h2>Product Not Found</h2>;
    }

    const imagePath = require(`../assets/${product.image}`);

    return (
        <div className="product-detail">
            <img 
                src={imagePath} 
                alt={product.name}
                className="product-detail-image"
            />
            <h2>{product.name}</h2>
            <p>SKU: {product.sku}</p>
            <p>Quantity Available: {product.qty}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Description: {product.description}</p>
        </div>
    );
};

export default ProductDetail;
