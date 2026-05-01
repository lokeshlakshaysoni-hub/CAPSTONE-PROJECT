import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import products from "./data/products";

import "./index.css";

function App() {
  // useState is a React Hook that lets us store data that can change over time.
  // Here, we create a 'cart' variable which is an empty array at the start.
  const [cart, setCart] = useState([]);

  // Function to add a product to our cart
  function addToCart(product) {
    let isAlreadyInCart = false;

    // We use a basic loop to check if the product is already inside our cart array
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id) {
        isAlreadyInCart = true;
      }
    }

    if (isAlreadyInCart === true) {
      alert("This product is already in your cart!");
    } else {
      // If it is not in the cart, we create a new array with the old items plus the new product
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      alert("Successfully added to cart!");
    }
  }

  // Function to remove a product from our cart using its unique ID
  function removeFromCart(productId) {
    const updatedCart = [];

    // We loop through the cart. If the item's ID does NOT match the one we want to remove, we keep it.
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id !== productId) {
        updatedCart.push(cart[i]);
      }
    }

    // We update our state with the new array
    setCart(updatedCart);
  }

  return (
    <div className="app">
      {/* BrowserRouter wraps our app so we can navigate between different pages */}
      <BrowserRouter>
        <Navbar cartCount={cart.length} />

        <main className="main-content">
          <Routes>
            {/* Route tells React which Component to load for a specific URL path */}
            <Route
              path="/"
              element={<Home products={products} onAddToCart={addToCart} />}
            />

            <Route
              path="/products"
              element={<Products products={products} onAddToCart={addToCart} />}
            />

            <Route
              path="/cart"
              element={<Cart cart={cart} onRemove={removeFromCart} />}
            />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
