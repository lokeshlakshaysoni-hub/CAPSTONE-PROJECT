import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";

function Products() {
  // We use useContext to get our products from ShopContext instead of props
  const { products } = useContext(ShopContext);

  // We use useState to keep track of what the user types in the search bar and what category they click
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Create a list of categories for our buttons. We use Set to remove duplicates.
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // We filter the products array based on our search term and selected category
  const filteredProducts = products.filter((product) => {
    
    // Step 1: Check if the product matches the chosen category
    let matchesCategory = false;
    if (selectedCategory === "All") {
      matchesCategory = true;
    } else if (product.category === selectedCategory) {
      matchesCategory = true;
    }

    // Step 2: Check if the product name contains the search text
    let matchesSearch = false;
    let lowerCaseProductName = product.name.toLowerCase();
    let lowerCaseSearchText = searchTerm.toLowerCase();

    // If the product name includes what we typed, it matches!
    if (lowerCaseProductName.includes(lowerCaseSearchText)) {
      matchesSearch = true;
    }

    // Step 3: Only keep the product if it passes BOTH the category check AND the search check
    if (matchesCategory === true && matchesSearch === true) {
      return true; // Keep this product
    } else {
      return false; // Hide this product
    }
  });

  return (
    <div className="products-page">
      <div className="products-header">
        <h1 className="page-title">Our Collection</h1>
        <p className="page-subtitle">Find your perfect style from {products.length} items</p>
      </div>

      <div className="search-bar-wrapper">
        {/* Input field that updates our searchTerm state whenever the user types */}
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="category-filters">
        {/* Create a button for every unique category */}
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

      {/* If we have products to show, display them in a grid */}
      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        // If the filter removes all products, show this empty state message
        <div className="empty-state">
          <p>😕 No products found. Try a different search or category.</p>
        </div>
      )}
    </div>
  );
}

export default Products;
