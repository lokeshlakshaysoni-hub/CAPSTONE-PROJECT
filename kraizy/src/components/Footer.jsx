function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>⚡ Kraizy</h3>
          <p>Wear the vibe. Live the culture.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📧 support@kraizy.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Mumbai, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2024 Kraizy. All rights reserved. Made with ❤️ in India.</p>
      </div>
    </footer>
  );
}

export default Footer;
