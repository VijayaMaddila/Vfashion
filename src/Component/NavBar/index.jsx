import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./index.css";

const Navbar = ({ cartCount }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <p>☰</p>
      </div>

      <div className="logo">V.fashion</div>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/home" className="list" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link to="/products" className="list" onClick={() => setOpen(false)}>
          Products
        </Link>
        <Link to="/wishlist" className="list" onClick={() => setOpen(false)}>
          Wishlist ❤️
        </Link>
        <Link to="/cart" className="list" onClick={() => setOpen(false)}>
          🛒 {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </ul>

      <Link to="/contact" className="nav-btn">
        Contact
      </Link>

      <button onClick={handleLogout} className="nav-btn logout-btn">
        LogOut
      </button>
    </nav>
  );
};

export default Navbar;
