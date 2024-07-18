import React from 'react';


const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
