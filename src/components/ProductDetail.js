import { useParams,Link } from 'react-router-dom';
import inventoryData from '../data/inventory.json';
import '../css/ProductDetail.css';
import { useState } from 'react';

const ProductDetail = () => {
    const { sku } = useParams();
    const product = inventoryData.find((item) => item.sku === sku);
    const [imageError, setImageError] = useState(false);

    if (!product) {
        return <h2>Product Not Found</h2>;
    }

    //I use this to handle the case where the image is not found
    const imagePath = imageError ? '/placeholder.png' : `/${product.image}`;

    return (
        <div className="product-detail">
            <img 
                src={imagePath} 
                alt={product.name}
                className="product-detail-image"
                onError={() => setImageError(true)}
            />
            <h2>{product.name}</h2>
            <p>SKU: {product.sku}</p>
            <p>Quantity Available: {product.qty}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Description: {product.description}</p>

            <Link to="/" className="back-button">← Back to Home</Link>
        </div>
    );
};

export default ProductDetail;
