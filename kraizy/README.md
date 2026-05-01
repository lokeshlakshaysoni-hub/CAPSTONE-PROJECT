# ⚡ Kraizy — React E-Commerce App

> **Kraizy** is a beginner-friendly React.js e-commerce web app built with Vite and React Router.
> It lets users browse clothing products, manage a shopping cart, save items to a wishlist, and view a profile page.
> The project demonstrates core React concepts — `useState`, props, and client-side routing — in a real-world shopping app.

---

## 📁 Project Structure

```
kraizy/
├── index.html               ← Main HTML file (React mounts here)
├── vite.config.js           ← Vite build tool configuration
├── package.json             ← Project dependencies and scripts
└── src/
    ├── main.jsx             ← Entry point — renders <App /> into index.html
    ├── App.jsx              ← Root component — holds all state and routing
    ├── index.css            ← Global styles for the entire app
    ├── data/
    │   └── products.js      ← Static product data (acts as our database)
    ├── components/
    │   ├── Navbar.jsx       ← Top navigation bar (shown on all pages)
    │   ├── Footer.jsx       ← Bottom footer (shown on all pages)
    │   └── ProductCard.jsx  ← Reusable card for displaying one product
    └── pages/
        ├── Home.jsx         ← Home page with hero section and featured products
        ├── Products.jsx     ← All products page with search and category filter
        ├── Cart.jsx         ← Shopping cart with quantity controls and total
        ├── Wishlist.jsx     ← Saved/wishlisted products page
        └── Profile.jsx      ← User profile page with edit functionality
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React.js** | Building the UI using components |
| **Vite** | Fast development server and build tool |
| **React Router DOM** | Client-side navigation between pages |
| **useState (React Hook)** | Managing cart, wishlist, and dark mode state |
| **CSS (Vanilla)** | All styling — no external UI library used |
| **Google Fonts (Outfit)** | Clean, modern typography |

---

## ⚛️ Key React Concepts Used

### 1. `useState` — State Management
State is data that can change and cause the UI to re-render.

```jsx
const [cart, setCart] = useState([]);       // cart starts as empty array
const [darkMode, setDarkMode] = useState(false); // dark mode starts as OFF
```

All main state lives in `App.jsx` so it can be shared across pages.

---

### 2. Props — Passing Data Between Components
Props are how a parent component sends data or functions to a child component.

```jsx
// App.jsx sends these props DOWN to the Cart page
<Cart
  cart={cart}
  onRemove={removeFromCart}
  onIncrease={increaseQty}
  onDecrease={decreaseQty}
/>
```

```jsx
// Cart.jsx receives and uses them
function Cart({ cart, onRemove, onIncrease, onDecrease }) { ... }
```

---

### 3. React Router — Client-Side Navigation
React Router allows switching between pages without a full browser reload.

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/"         element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/cart"     element={<Cart />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/profile"  element={<Profile />} />
  </Routes>
</BrowserRouter>
```

- `<Link to="/products">` is used instead of `<a href>` so the page does NOT reload.
- `useLocation()` in `Navbar.jsx` reads the current URL to highlight the active link.

---

### 4. `.map()` — Rendering Lists
`.map()` loops over an array and returns JSX for each item.

```jsx
{products.map((product) => (
  <ProductCard key={product.id} product={product} />
))}
```

The `key` prop helps React efficiently update only the changed item.

---

### 5. `.filter()` — Search and Category Filtering (Products Page)
```jsx
const filteredProducts = products.filter((product) => {
  const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
  const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
  return matchesCategory && matchesSearch;
});
```

---

### 6. `.reduce()` — Calculating Cart Total
```jsx
const totalPrice = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
```

---

### 7. Conditional Rendering
Show different UI based on a condition:

```jsx
{cart.length === 0 ? (
  <p>Your cart is empty!</p>
) : (
  <div>...show cart items...</div>
)}
```

---

### 8. Controlled Inputs (Profile Page)
Input values are tied to state — React controls what the user sees:

```jsx
<input
  name="name"
  value={tempProfile.name}
  onChange={(e) => setTempProfile({ ...tempProfile, [e.target.name]: e.target.value })}
/>
```

---

## 📄 Page-by-Page Explanation

### 🏠 Home (`/`)
- Shows a **hero section** with brand tagline and two floating product cards.
- Displays **4 featured products** using `ProductCard`.
- Has a features strip: Free Delivery, Easy Returns, Secure Payment, Premium Quality.

### 🛍️ Products (`/products`)
- Shows **all 8 products** in a responsive grid.
- **Search bar** filters products by name in real time.
- **Category buttons** filter products by type (T-Shirts, Jeans, etc.).
- Uses `useState` for `searchTerm` and `selectedCategory`.

### 🛒 Cart (`/cart`)
- Lists all items added to the cart with image, name, price, and quantity.
- **+/−** buttons call `increaseQty` / `decreaseQty` from `App.jsx`.
- Shows an **Order Summary** panel with subtotal, delivery, 5% discount, and final total.
- Free delivery is applied automatically when order value ≥ ₹999.

### ❤️ Wishlist (`/wishlist`)
- Lists all products the user has saved (hearted).
- **Move to Cart** button adds the item to cart and removes it from wishlist.
- **Remove** button removes the item from wishlist only.

### 👤 Profile (`/profile`)
- Displays user info: name, email, phone, city, bio.
- **Edit Profile** button switches to an editable form (controlled inputs).
- **Save** updates the profile state; **Cancel** resets any unsaved changes.
- Shows 3 stat cards: Orders Placed, Wishlisted, Reviews Given.

---

## 🌙 Dark Mode
- A toggle button in the Navbar flips `darkMode` state in `App.jsx`.
- When `darkMode` is `true`, the class `"dark"` is added to the root `<div>`.
- CSS variables in `.dark { }` override the default light-mode colors automatically.

---

## 🚀 How to Run Locally

```bash
# Step 1: Install dependencies
npm install

# Step 2: Start the development server
npm run dev

# Step 3: Open in browser
# Go to: http://localhost:5173
```

---

## 💡 Interview / Viva Tips

| Question | Answer |
|---|---|
| What is React? | A JavaScript library for building UI using reusable components |
| What is `useState`? | A React hook that stores data that can change and triggers re-render |
| What are Props? | Data/functions passed from parent to child component |
| What is React Router? | A library for URL-based navigation without page reload |
| Why use `key` in lists? | Helps React identify which item changed for efficient re-rendering |
| What is a controlled input? | An input whose value is always driven by React state |
| What does `.map()` do? | Loops over an array and returns a new array (used to render lists) |
| What is Vite? | A fast build tool that serves React apps during development |
