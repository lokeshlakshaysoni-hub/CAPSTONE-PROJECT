import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function ProductCard({ product }) {
  // Grab our functions and state from the global Context
  const { addToCart, wishlist, addToWishlist, removeFromWishlist } = useContext(ShopContext);

  // Check if this specific product is already inside the wishlist using a simple loop
  let isAlreadyInWishlist = false;
  for (let i = 0; i < wishlist.length; i++) {
    if (wishlist[i].id === product.id) {
      isAlreadyInWishlist = true;
    }
  }

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

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "15px" }}>
          <button
            className="btn-add-cart"
            onClick={() => addToCart(product)}
            style={{ width: "100%" }}
          >
            🛒 Add to Cart
          </button>

          {/* If the product is in the wishlist, show the Remove button. Otherwise, show Add button. */}
          {isAlreadyInWishlist === true ? (
            <button
              className="btn-wishlist"
              onClick={() => removeFromWishlist(product.id)}
              style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ff4d4d", backgroundColor: "#ffe6e6", color: "#cc0000", cursor: "pointer", fontWeight: "bold" }}
            >
              ❤️ Remove from Wishlist
            </button>
          ) : (
            <button
              className="btn-wishlist"
              onClick={() => addToWishlist(product)}
              style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc", backgroundColor: "#f9f9f9", color: "#333", cursor: "pointer", fontWeight: "bold" }}
            >
              🤍 Add to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
