import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function Cart() {
  // We use useContext to pull our cart and removeFromCart function directly from ShopContext
  const { cart, removeFromCart } = useContext(ShopContext);

  // Step 1: Calculate the total price using a basic for-loop
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].price;
  }

  // Step 2: Get the total number of items
  const totalItems = cart.length;

  // Step 3: Determine the delivery charge based on the total price
  let deliveryCharge = 99;
  if (totalPrice >= 999) {
    deliveryCharge = 0;
  }

  // Step 4: Calculate final total
  const finalTotal = totalPrice + deliveryCharge;

  // If the cart is empty, show the empty state UI
  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your cart is empty!</h2>
          <p>Looks like you haven't added anything yet.</p>
          <Link to="/products" className="btn-primary">
            Browse Products →
          </Link>
        </div>
      </div>
    );
  }

  // If the cart has items, render the list
  return (
    <div className="cart-page">
      <h1 className="page-title">Your Cart</h1>
      <p className="page-subtitle">{totalItems} item(s) in your bag</p>

      <div className="cart-layout">
        <div className="cart-items">
          {/* We use .map() to loop over the cart array and display HTML for each item */}
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-info">
                <span className="cart-item-category">{item.category}</span>
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">₹{item.price.toLocaleString()}</p>
              </div>
              <div className="cart-item-right">
                <button className="btn-remove" onClick={() => removeFromCart(item.id)}>
                  🗑️ Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal ({totalItems} items)</span>
            <span>₹{totalPrice.toLocaleString()}</span>
          </div>
          
          <div className="summary-row">
            <span>Delivery</span>
            <span className={deliveryCharge === 0 ? "free-delivery" : ""}>
              {deliveryCharge === 0 ? "FREE ✅" : "₹" + deliveryCharge}
            </span>
          </div>
          
          <div className="summary-divider"></div>
          
          <div className="summary-row summary-total">
            <span>Total</span>
            <span>₹{finalTotal.toLocaleString()}</span>
          </div>
          
          {/* Show a hint if they are close to free delivery */}
          {deliveryCharge > 0 && (
            <p className="free-delivery-hint">
              Add ₹{999 - totalPrice} more for FREE delivery!
            </p>
          )}
          
          <button className="btn-checkout">Proceed to Checkout →</button>
          <Link to="/products" className="continue-shopping">
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
