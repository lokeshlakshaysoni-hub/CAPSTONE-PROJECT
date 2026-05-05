import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";

function Wishlist() {
  // We use useContext to pull data directly from our ShopContext
  const { wishlist } = useContext(ShopContext);

  // We use useState to keep track of what category the user clicks
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Create a list of categories for our buttons from the items CURRENTLY in the wishlist.
  // We use Set to remove duplicates.
  const categories = ["All", ...new Set(wishlist.map((p) => p.category))];

  // We filter the wishlist array based on our selected category
  const filteredWishlist = wishlist.filter((product) => {
    if (selectedCategory === "All") {
      return true;
    } else if (product.category === selectedCategory) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className="products-page">
      <div className="products-header">
        <h1 className="page-title">Your Wishlist</h1>
        <p className="page-subtitle">You have {wishlist.length} saved items</p>
      </div>

      <div className="category-filters">
        {/* Create a button for every unique category in our wishlist */}
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* If we have products to show, display them in a grid */}
      {filteredWishlist.length > 0 ? (
        <div className="products-grid">
          {filteredWishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        // If the filter removes all products, or wishlist is empty, show this
        <div className="empty-state">
          <h2>Your wishlist is empty</h2>
          <p>Explore our products and save your favorites!</p>
        </div>
      )}
    </div>
  );
}

export default Wishlist;
