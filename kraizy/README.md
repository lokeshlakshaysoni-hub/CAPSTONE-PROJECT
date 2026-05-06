# Kraizy E-Commerce - Final Project Documentation

---

# Project Overview

Kraizy is a modern, responsive e-commerce web application like amazon ,  built with React.js. It features a complete shopping experience where users can:
- Browse products across different categories.
- Search for specific items in real-time.
- Save items to a Wishlist.
- Add items to a Shopping Cart and see real-time price calculations.
- Experience a Single Page Application (SPA) where navigation is instant.

---

# Core JavaScript Functions 

# 1. useState
This is a React Hook that creates a "state" variable. In beginner terms, it's a variable that React "watches." Whenever the value changes, React automatically updates the screen.
- Used for: Search input, Category selection, Cart items, Wishlist items.

# 2. useContext
This allows us to share data globally across the entire app. Without this, we would have to pass data through every single component like a relay race (prop drilling).
- Used for: Making the Cart and Wishlist accessible from any page.

# 3. for loops
A basic way to repeat code. I used this to calculate totals and check if items already exist in an array.
- Logic: `for (let i = 0; i < array.length; i++) { ... }`

# 4. array.push()
Used to add a new item to the end of an array.
- Used in: `removeFromCart` and `removeFromWishlist` to rebuild the array without the deleted item.

# 5. includes()
This checks if a string contains another string.
- Used in: Search filtering. If the product name "includes" what you typed, it stays on the screen.

# 6. toLowerCase()
Converts text to small letters.
- Used in: Making the search case-insensitive (searching for "TEE" or "tee" both work).

# 7. Spread Operator (...)
Used to copy everything from an old array into a new one.
- Logic: `[...oldArray, newItem]` adds the new item while keeping all the old ones.

# 8. Filter()
Creates a new array by filtering out items that don't match a condition.
- Used in: Showing only "T-Shirts" when that category is clicked.

# 9. Map()
Goes through every item in an array and turns it into HTML.
- Used in: Displaying the grid of products on the screen.

# 10. useState Hook
const [items, setItems] = useState([]);
UsedState is a react hook that creates a state variable. In beginner terms, it's a variable that React "watches." Whenever the value changes, React automatically updates the screen.

# 11. context api
Context API is a react hook that creates a state variable. In beginner terms, it's a variable that React "watches." Whenever the value changes, React automatically updates the screen.
---

# 12. useEffect Hook
useEffect is a react hook that is used to perform side effects in a functional component. Side effects are any code that affects the outside world, such as API calls, DOM manipulations, and event listeners.



# File-by-File Breakdown

# src/App.jsx
The "Main Office" of the app. It decides which page to show based on the URL.
- Logic: Uses `<Routes>` and `<Route>` to map paths like `/cart` to the `Cart.jsx` file.
- It wraps everything in `<ShopProvider>` so the whole app can talk to the database.

# src/context/ShopContext.jsx
The "Database" of the app. It stores the actual list of items in your cart and wishlist.
- `addToCart`: Checks if item ID exists using a loop. If not, adds it to the cart state.
- `removeFromCart`: Loops through the cart and creates a new list without that specific ID.

# src/pages/Home.jsx
The landing page.
- It shows the "Hero" section with a call to action button.
- It uses `.slice(0, 4)` to show only the first 4 "Featured" products.

# src/pages/Products.jsx
The main shop floor.
- It handles the search bar logic and the category filter buttons.
- Every time you type or click a category, the `filteredProducts` list updates instantly.

# src/pages/Wishlist.jsx
Your saved items.
- It reads the `wishlist` array from the Context.
- It uses the same filter logic as the products page so you can sort your favorites.

# src/pages/Cart.jsx
The checkout counter.
- It calculates the `totalPrice` using a `for` loop.
- It adds a delivery charge logic: `if (totalPrice < 999) { charge = 99 }`.
- It calculates the `finalTotal` and shows the summary.

# src/components/ProductCard.jsx
The "Display Box" for each item.
- It takes product data and formats it into a card.
- It has buttons to Add to Cart or Add/Remove from Wishlist.

---

# Q: How does the search filter work?
A: I take the user's input, convert it to lowercase, and use the `.filter()` method to check if each product's name `.includes()` that input.

# Q: How do you add items to the cart?
A: I use a function in the Context that checks if the item is already there. If not, I use the Spread Operator to add the new item to the array.
