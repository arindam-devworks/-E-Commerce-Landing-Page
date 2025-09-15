//

// src/components/Products/ProductCard.jsx
import { useState } from "react";
import "./ProductGrid.css";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image">
        <img
          src={product.images[0] || "https://via.placeholder.com/300"}
          alt={product.title}
        />
        {isHovered && (
          <div className="product-overlay">
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
