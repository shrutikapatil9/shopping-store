import React from 'react';
import './Product.css';

function Product({ product, onAddToWishlist, onViewDetails }) {
  return (
    <div className="product-card">
      <img src={product.imgUrl} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">₹{product.price}</p>
      <p className="product-description">{product.description}</p>
      <div className="product-actions">
        <button className="product-btn" onClick={() => onAddToWishlist(product)}>
          Add to Wishlist
        </button>

        <button className="product-btn secondary" onClick={() => onViewDetails(product)}>
          View
        </button>
      </div>
    </div>
  );
}

export default Product;
