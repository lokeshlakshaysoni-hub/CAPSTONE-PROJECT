import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import products from "./data/products";

import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDark = () => setDarkMode(!darkMode);

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const increaseQty = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const alreadyWishlisted = prev.find((w) => w.id === product.id);
      if (alreadyWishlisted) {
        return prev.filter((w) => w.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((w) => w.id !== productId));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Navbar
          darkMode={darkMode}
          toggleDark={toggleDark}
          cartCount={cartCount}
          wishlistCount={wishlist.length}
        />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  onAddToCart={addToCart}
                  onAddToWishlist={toggleWishlist}
                  wishlist={wishlist}
                />
              }
            />

            <Route
              path="/products"
              element={
                <Products
                  products={products}
                  onAddToCart={addToCart}
                  onAddToWishlist={toggleWishlist}
                  wishlist={wishlist}
                />
              }
            />

            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  onRemove={removeFromCart}
                  onIncrease={increaseQty}
                  onDecrease={decreaseQty}
                />
              }
            />

            <Route
              path="/wishlist"
              element={
                <Wishlist
                  wishlist={wishlist}
                  onRemoveFromWishlist={removeFromWishlist}
                  onAddToCart={addToCart}
                />
              }
            />

            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
