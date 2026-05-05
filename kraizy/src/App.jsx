import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import our Context Provider
import { ShopProvider } from "./context/ShopContext";

// Import Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Global Styles
import "./index.css";

function App() {
  return (
    // We wrap our entire app inside ShopProvider. 
    // This allows any component inside to access the global state (cart, wishlist, etc.)
    <ShopProvider>
      <div className="app">
        {/* BrowserRouter wraps our app so we can navigate between different pages */}
        <BrowserRouter>
          <Navbar />

          <main className="main-content">
            <Routes>
              {/* Route tells React which Component to load for a specific URL path */}
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </main>

          <Footer />
        </BrowserRouter>
      </div>
    </ShopProvider>
  );
}

export default App;
