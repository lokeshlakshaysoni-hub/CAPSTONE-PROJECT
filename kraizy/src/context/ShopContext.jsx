import { createContext, useState } from "react";
import products from "../data/products";

export const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // CART FUNCTIONS
  function addToCart(product) {
    let isAlreadyInCart = false;
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
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id !== productId) {
        updatedCart.push(cart[i]);
      }
    }
    setCart(updatedCart);
  }

  // WISHLIST FUNCTIONS
  function addToWishlist(product) {
    let isAlreadyInWishlist = false;
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
    for (let i = 0; i < wishlist.length; i++) {
      if (wishlist[i].id !== productId) {
        updatedWishlist.push(wishlist[i]);
      }
    }
    setWishlist(updatedWishlist);
  }

  const contextValue = {
    products,
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
