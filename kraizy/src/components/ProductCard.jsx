function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="card-img-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="card-img"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/400x400?text=Kraizy";
          }}
        />
      </div>

      <div className="card-body">
        <span className="card-category">{product.category}</span>

        <h3 className="card-name">{product.name}</h3>

        <div className="card-rating">
          {"★".repeat(Math.floor(product.rating))}
          {"☆".repeat(5 - Math.floor(product.rating))}
          <span className="rating-num">({product.rating})</span>
        </div>

        <p className="card-price">₹{product.price.toLocaleString()}</p>

        <button
          className="btn-add-cart"
          onClick={() => onAddToCart(product)}
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
