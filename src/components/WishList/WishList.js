// src/components/Wishlist/wishlist.js

import React from 'react';
import './WishList.css';

function WishList({ wishlist }) {
  return (
   <div className="wishlist-container">
  <h3>Your Wishlist</h3>
  {wishlist.length > 0 ? (
    wishlist.map((product, index) => (
      <div className="wishlist-item" key={index}>
        <img src={product.imgUrl} alt={product.title} className="wishlist-img" />
        <div>
          <h4>{product.title}</h4>
          <p>₹{product.price}</p>
        </div>
      </div>
    ))
  ) : (
    <p>No items in wishlist.</p>
  )}
</div>

  );
}

export default WishList;
