import { Link } from "react-router-dom";

function Wishlist({ wishlist, onRemoveFromWishlist, onAddToCart }) {

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page">
        <div className="empty-cart">
          <div className="empty-cart-icon">🤍</div>
          <h2>Your wishlist is empty!</h2>
          <p>Browse products and tap ❤️ to save your favourites.</p>
          <Link to="/products" className="btn-primary">
            Explore Products →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <h1 className="page-title">My Wishlist ❤️</h1>
      <p className="page-subtitle">{wishlist.length} item(s) saved</p>

      <div className="wishlist-grid">
        {wishlist.map((product) => (
          <div key={product.id} className="wishlist-card">
            <div className="wishlist-img-wrapper">
              <img src={product.image} alt={product.name} className="wishlist-img" />
              <button
                className="remove-wish-btn"
                onClick={() => onRemoveFromWishlist(product.id)}
                title="Remove from Wishlist"
              >
                ❤️
              </button>
            </div>

            <div className="wishlist-card-body">
              <span className="card-category">{product.category}</span>
              <h3>{product.name}</h3>
              <p className="card-price">₹{product.price.toLocaleString()}</p>

              <div className="wishlist-card-actions">
                <button
                  className="btn-add-cart"
                  onClick={() => {
                    onAddToCart(product);
                    onRemoveFromWishlist(product.id);
                  }}
                >
                  🛒 Move to Cart
                </button>
                <button
                  className="btn-remove-wish"
                  onClick={() => onRemoveFromWishlist(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-wrapper" style={{ marginTop: "2rem" }}>
        <Link to="/products" className="btn-secondary">
          ← Keep Shopping
        </Link>
      </div>
    </div>
  );
}

export default Wishlist;
