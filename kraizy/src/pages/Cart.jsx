import { Link } from "react-router-dom";

function Cart({ cart, onRemove, onIncrease, onDecrease }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

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

  return (
    <div className="cart-page">
      <h1 className="page-title">Your Cart</h1>
      <p className="page-subtitle">{totalItems} item(s) in your bag</p>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-info">
                <span className="cart-item-category">{item.category}</span>
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">₹{item.price.toLocaleString()} each</p>
                <div className="quantity-controls">
                  <button className="qty-btn" onClick={() => onDecrease(item.id)} title="Decrease quantity">−</button>
                  <span className="qty-display">{item.quantity}</span>
                  <button className="qty-btn" onClick={() => onIncrease(item.id)} title="Increase quantity">+</button>
                </div>
              </div>
              <div className="cart-item-right">
                <p className="cart-item-subtotal">₹{(item.price * item.quantity).toLocaleString()}</p>
                <button className="btn-remove" onClick={() => onRemove(item.id)}>🗑️ Remove</button>
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
            <span className={totalPrice >= 999 ? "free-delivery" : ""}>
              {totalPrice >= 999 ? "FREE ✅" : "₹99"}
            </span>
          </div>
          <div className="summary-row">
            <span>Discount</span>
            <span className="discount-text">-₹{Math.floor(totalPrice * 0.05).toLocaleString()}</span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row summary-total">
            <span>Total</span>
            <span>₹{(totalPrice + (totalPrice < 999 ? 99 : 0) - Math.floor(totalPrice * 0.05)).toLocaleString()}</span>
          </div>
          {totalPrice < 999 && (
            <p className="free-delivery-hint">Add ₹{999 - totalPrice} more for FREE delivery!</p>
          )}
          <button className="btn-checkout">Proceed to Checkout →</button>
          <Link to="/products" className="continue-shopping">← Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
