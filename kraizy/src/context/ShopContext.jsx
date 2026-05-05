import { createContext, useState } from "react";
import products from "../data/products";

// We create a Context. This is like a global storage box that any component can access.
export const ShopContext = createContext();

// This Provider component will wrap our entire app
export function ShopProvider({ children }) {
  // We use useState to keep track of our cart and wishlist
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // ================= CART FUNCTIONS =================

  function addToCart(product) {
    let isAlreadyInCart = false;

    // Use a basic loop to check if the product is already in the cart
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id) {
        isAlreadyInCart = true;
      }
    }

    if (isAlreadyInCart === true) {
      alert("This product is already in your cart!");
    } else {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      alert("Successfully added to cart!");
    }
  }

  function removeFromCart(productId) {
    const updatedCart = [];

    // Loop through the cart and keep everything EXCEPT the one we want to remove
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id !== productId) {
        updatedCart.push(cart[i]);
      }
    }

    setCart(updatedCart);
  }

  // ================= WISHLIST FUNCTIONS =================

  function addToWishlist(product) {
    let isAlreadyInWishlist = false;

    // Use a basic loop to check if the product is already in the wishlist
    for (let i = 0; i < wishlist.length; i++) {
      if (wishlist[i].id === product.id) {
        isAlreadyInWishlist = true;
      }
    }

    if (isAlreadyInWishlist === true) {
      alert("This product is already in your wishlist!");
    } else {
      const updatedWishlist = [...wishlist, product];
      setWishlist(updatedWishlist);
      alert("Added to wishlist!");
    }
  }

  function removeFromWishlist(productId) {
    const updatedWishlist = [];

    // Loop through the wishlist and keep everything EXCEPT the one we want to remove
    for (let i = 0; i < wishlist.length; i++) {
      if (wishlist[i].id !== productId) {
        updatedWishlist.push(wishlist[i]);
      }
    }

    setWishlist(updatedWishlist);
  }

  // This is what we provide to the rest of the app
  const contextValue = {
    products, // The full list of products
    cart,
    addToCart,
    removeFromCart,
    wishlist,
    addToWishlist,
    removeFromWishlist,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
}
