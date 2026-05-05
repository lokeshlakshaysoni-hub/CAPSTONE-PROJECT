import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
  const location = useLocation();
  
  // Pull our cart and wishlist from the global context
  const { cart, wishlist } = useContext(ShopContext);
  
  const cartCount = cart.length;
  const wishlistCount = wishlist.length;

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="brand-icon">⚡</span>
        <span className="brand-name">Kraizy</span>
      </Link>

      <ul className="nav-links">
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className={location.pathname === "/products" ? "nav-link active" : "nav-link"}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/wishlist"
            className={location.pathname === "/wishlist" ? "nav-link active" : "nav-link"}
          >
            Wishlist
            {wishlistCount > 0 && (
              <span className="badge wishlist-badge">{wishlistCount}</span>
            )}
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}
          >
            Cart
            {cartCount > 0 && (
              <span className="badge cart-badge">{cartCount}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
