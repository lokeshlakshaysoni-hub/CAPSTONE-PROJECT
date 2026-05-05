 Kraizy E-Commerce 

## 1. Project Introduction 


My project is named Kraizy, which is a fully functional, front-end e-commerce web application built using React.js. 

The main goal of this project was to build a dynamic, single-page application (SPA) where users can seamlessly browse products, add them to a wishlist, and manage a shopping cart without the page ever reloading. 

To achieve this, I used several core React concepts:
- React Router for navigating between the Home, Products, Wishlist, and Cart pages.
- Context API for global state management, allowing any component to access the cart and wishlist instantly.
- React Hooks to manage dynamic data and user interactions.

The platform features a modern, responsive UI with search filtering, category sorting, and dynamic cart calculations."

---

## 2. Core Concepts & Functions Used

### `useState`
A React Hook that lets us store data that changes over time (like user input or toggle switches).
I used `useState` to keep track of the `searchTerm` (what the user types in the search box) and the `selectedCategory` (which filter button the user clicked).

### `useContext` / Context API
A way to share data globally across the entire app without passing variables down manually through every single component (prop-drilling).
I created a `ShopContext` to store the `cart` and `wishlist` arrays. Any page that needs to show the cart count or add an item simply calls `useContext(ShopContext)`.

### Array `.filter()`
A JavaScript function that goes through an array and creates a *new* array containing only the items that pass a specific condition.
On the Products and Wishlist pages, I used `.filter()` to only show products that match the selected category and the typed search term.

### Array `.map()`
A JavaScript function that loops through an array and transforms each item into something else.
I used `.map()` to loop through the array of product objects and transform them into HTML `<ProductCard>` components to display on the screen.

### Basic `for` loops
A fundamental programming concept to repeat an action.
Inside my functions like `addToCart` and `removeFromCart`, I used simple `for` loops to iterate over arrays. For example, to calculate the total cart price, I loop through the cart array and add up the `price` of each item.

---

## 3. Code Explanation "Turn-by-Turn" (File by File)

### 📄 `src/App.jsx`
This is the starting point and main wrapper of the application.
- It wraps everything inside `<ShopProvider>`, giving all pages access to global data.
- It uses `<BrowserRouter>` and `<Routes>` to set up navigation. 
- It defines the URL paths (like `/products` and `/cart`) and tells React which page component to load when the user visits that URL.

### 📄 `src/context/ShopContext.jsx`
This is the "global storage" for the application.
- It uses `useState` to store the `cart` and `wishlist` arrays.
- It contains standard JavaScript functions with `for` loops to `addToCart`, `removeFromCart`, `addToWishlist`, and `removeFromWishlist`.
- For example, `addToCart` loops through the existing cart to check if the product is already there. If not, it adds it to the array.
- It then "provides" these variables and functions to the rest of the app.

### 📄 `src/pages/Home.jsx`
The landing page of the website.
It uses `useContext` to pull the global list of products.
It uses `.slice(0, 4)` to take only the first 4 products and display them in a "Featured Products" section.
It contains static HTML sections for the hero banner and store features (like Free Delivery).

### 📄 `src/pages/Products.jsx`
The main shopping page where users can search and filter.
It uses `useState` for `searchTerm` and `selectedCategory`.
- It dynamically generates category buttons by looking at all the products and using `new Set()` to extract unique categories.
- It uses `.filter()` to decide which products to show based on what the user searched for and which category button they clicked.
- Finally, it uses `.map()` to render the filtered products onto the screen.

### 📄 `src/pages/Wishlist.jsx`
A dedicated page to view saved items.
- Very similar to `Products.jsx`, but instead of looking at all products, it uses `useContext` to only look at the `wishlist` array.
- It allows the user to filter their saved wishlist items by category using the same `.filter()` logic.

### 📄 `src/pages/Cart.jsx`
Displays the items the user wants to buy and calculates the final bill.
- It uses `useContext` to get the `cart` array.
- It runs a `for` loop over the cart array to add up the `price` of every item, giving us the `totalPrice`.
- It uses an `if` statement to apply a delivery charge of ₹99 unless the total is over ₹999.
- It displays the items, and has a "Remove" button that triggers the `removeFromCart` function from our context.

### 📄 `src/components/ProductCard.jsx`
A reusable UI component that represents a single product box.
- It receives a single `product` object via props.
- It displays the product's image, name, category, and price.
- It uses `useContext` to get the Add/Remove functions.
- It uses a basic `for` loop to check if this specific product is inside the global `wishlist` array. If it is, it shows a "❤️ Remove from Wishlist" button. If it isn't, it shows a "🤍 Add to Wishlist" button.
