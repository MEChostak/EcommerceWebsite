import React from "react";
import "./ProductCard.css";

const ProductCard = ({
  image,
  name,
  price,
  variants = [],
  inStock = true,
  onAddToCart,
}) => {
  return (
    <div className="card product-card h-100 shadow-sm">
      {/* Product Image */}
      <img
        src={image}
        className="card-img-top p-3"
        alt={name}
        style={{
          height: "200px",
          objectFit: "contain",
        }}
      />

      {/* Product Info */}
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="lead mb-2">${price}</p>

        {/* Variants Dropdown */}
        {variants.length > 0 && (
          <select className="form-select mb-3">
            {variants.map((variant, idx) => (
              <option key={idx}>{variant}</option>
            ))}
          </select>
        )}

        {/* Add to Cart Button */}
        <button
          className={`btn ${inStock ? "btn-dark" : "btn-secondary"}`}
          disabled={!inStock}
          onClick={onAddToCart}
        >
          {inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
