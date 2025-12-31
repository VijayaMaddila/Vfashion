import { Link } from "react-router-dom";
import "./index.css";

const CartItems = ({ cartItems, addToCart, removeFromCart }) => {
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty 🛒</h2>
        <Link to="/products" className="shop-more">
          Shop More
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div className="cart-details">
            <h4>{item.name}</h4>
            <p>₹{item.price.toLocaleString("en-IN")}</p>

            <div className="cart-actions">
              <button onClick={() => removeFromCart(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
          </div>

          <p className="item-total">
            ₹{(item.price * item.quantity).toLocaleString("en-IN")}
          </p>
        </div>
      ))}

      {/* ===== Bottom Section ===== */}
      <div className="cart-summary">
        <h3>Total: ₹{totalAmount.toLocaleString("en-IN")}</h3>
      </div>

      <div className="shop-more-container">
        <Link to="/products" className="shop-more">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartItems;
