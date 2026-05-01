import { useState } from "react";
import ProductCard from "../components/ProductCard";

function Products({ products, onAddToCart, onAddToWishlist, wishlist }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-page">
      <div className="products-header">
        <h1 className="page-title">Our Collection</h1>
        <p className="page-subtitle">Find your perfect style from {products.length} items</p>
      </div>

      <div className="search-bar-wrapper">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="category-filters">
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

      <p className="results-count">
        Showing <strong>{filteredProducts.length}</strong> products
      </p>

      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onAddToWishlist={onAddToWishlist}
              isWishlisted={wishlist.some((w) => w.id === product.id)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>😕 No products found. Try a different search or category.</p>
        </div>
      )}
    </div>
  );
}

export default Products;
