import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Home({ products, onAddToCart, onAddToWishlist, wishlist }) {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home-page">

      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">🔥 New Collection 2024</p>
          <h1 className="hero-title">
            Wear the Vibe.<br />
            <span className="hero-highlight">Live Kraizy.</span>
          </h1>
          <p className="hero-subtitle">
            Premium streetwear that hits different. Express yourself
            with bold designs and unmatched comfort.
          </p>
          <div className="hero-btns">
            <Link to="/products" className="btn-primary">
              Shop Now →
            </Link>
            <Link to="/wishlist" className="btn-secondary">
              ❤️ Wishlist
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card hero-card-1">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop"
              alt="Featured wear"
            />
            <span>Urban Tee ⚡</span>
          </div>
          <div className="hero-card hero-card-2">
            <img
              src=" https://media.istockphoto.com/id/1501795711/photo/happy-man-posing-with-shopping-bags-and-pizza-while-standing-next-to-a-scooter-blurred.webp?a=1&b=1&s=612x612&w=0&k=20&c=X4-U1eJ60J2Y4rY5K7lR1v7D8_G4T6K-Lp8N0yB5E9U="
              alt="Hoodie"
            />
            <span>Sneakers 🔥</span>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-item">
          <span className="feature-icon">🚚</span>
          <h3>Free Delivery</h3>
          <p>On all orders above ₹999</p>
        </div>
        <div className="feature-item">
          <span className="feature-icon">🔄</span>
          <h3>Easy Returns</h3>
          <p>7-day hassle-free returns</p>
        </div>
        <div className="feature-item">
          <span className="feature-icon">🔒</span>
          <h3>Secure Payment</h3>
          <p>100% safe &amp; encrypted</p>
        </div>
        <div className="feature-item">
          <span className="feature-icon">🏆</span>
          <h3>Premium Quality</h3>
          <p>Handpicked, quality assured</p>
        </div>
      </section>

      <section className="featured-section">
        <h2 className="section-title">Featured Products</h2>
        <p className="section-subtitle">Handpicked styles just for you</p>

        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onAddToWishlist={onAddToWishlist}
              isWishlisted={wishlist.some((w) => w.id === product.id)}
            />
          ))}
        </div>

        <div className="view-all-wrapper">
          <Link to="/products" className="btn-primary">
            View All Products →
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;
