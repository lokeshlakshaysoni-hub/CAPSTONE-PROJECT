# Kraizy E-Commerce App

Hey there! This is Kraizy, a beginner-friendly React.js e-commerce website I built for my B.Tech project. 

It is designed to be super simple and easy to understand. Users can browse products, search for specific clothes, and add things to a shopping cart to see their total price. 

## Project Credits & Honesty
Just to be transparent about how this project was built:
- The entire project structure, file organization, and React component setup were made by me.
- The CSS user interface design (the modern look and feel) was designed with the use of AI.
- Some of the Javascript code logic was also written with the help of AI to ensure everything runs smoothly.

## Project Structure
Here is how the project is organized:

kraizy/
-- index.html (the main html file)
-- package.json (holds the project dependencies)
-- src/
   -- main.jsx (renders the app)
   -- App.jsx (the main brain of the app that holds the cart state)
   -- index.css (all the styles)
   -- components/
      -- Navbar.jsx (top navigation)
      -- Footer.jsx (bottom footer)
      -- ProductCard.jsx (reusable card for showing a single product)
   -- pages/
      -- Home.jsx (the landing page)
      -- Products.jsx (the page with all clothes and search bar)
      -- Cart.jsx (the shopping cart page)
   -- data/
      -- products.js (our mock database of clothes)

## Where is the main logic code used?
If you are looking for the files where the core Javascript logic happens:

1. src/App.jsx
This is where the cart state lives. It has the "addToCart" and "removeFromCart" functions. It uses basic "for" loops to check if a product is already in the cart and to filter items out.

2. src/pages/Products.jsx
This file contains the logic for the search bar and category filters. It loops through the products and uses step-by-step "if/else" statements to match the text typed by the user to the product names.

3. src/pages/Cart.jsx
This file calculates the total price of the items in the cart. It uses a standard "for" loop to add the prices together and figures out if the user gets free delivery based on the total.

## Tech Stack
React.js: for building the user interface.
Vite: to run the development server fast.
React Router DOM: to navigate between Home, Products, and Cart without reloading the page.
CSS: plain vanilla css for styling.

## How to run it

1. Open your terminal in this folder
2. Run "npm install" to download dependencies
3. Run "npm run dev" to start the server
4. Open the localhost link in your browser!

## Basic Viva Questions

**Q: What is React?**
It is a JavaScript library for building user interfaces using reusable components.

**Q: What are Props?**
Data or functions passed from a parent component down to a child component.

**Q: What is the .map() function used for?**
It loops over an array and returns HTML for each item. I used `.map()` to take my array of cart items and turn them into visual HTML cards on the screen. The "key" helps React keep track of which item is which.

**Q: Why did you use Vite?**
Because it is a very fast tool for starting and building React apps compared to older tools.

---

## Important Code i used in my project

**1. useState (from App.jsx)**
```javascript
const [cart, setCart] = useState([]);
```
**Use:** A React hook that stores data that can change. I used this to create a "cart" variable (starting as an empty array). When I call "setCart", React automatically updates the screen to show the new items.

**2. Props (from App.jsx to Cart.jsx)**
```javascript
<Cart cart={cart} onRemove={removeFromCart} />
```
**Use:** Props let us pass data or functions from a parent file to a child file. App.jsx (the parent) is sending the cart array and the removeFromCart function down to Cart.jsx (the child) so that the child can display the items and delete them.

**3. "for" loop (from Cart.jsx)**
```javascript
let totalPrice = 0;
for (let i = 0; i < cart.length; i++) {
  totalPrice = totalPrice + cart[i].price;
}
```
**Use:** A loop repeats a block of code. I used a for loop to go through every single item currently inside the cart array. For each item, I take its price and add it to my running "totalPrice" variable.

**4. The Search Filter (from Products.jsx)**
```javascript
if (lowerCaseProductName.includes(lowerCaseSearchText)) {
  matchesSearch = true;
}
```
**Use:** I take the product's name and convert it to lowercase, and then I check if it "includes" the lowercase text that the user typed into the search bar. If it does, I keep it on the screen!
