import { Link } from "react-router-dom";
import "./index.css";

const CartItems = ({ cartItems, addToCart, removeFromCart }) => {
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <h2 className="empty-cart">Your cart is empty 🛒</h2>;
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
            <div className="showMoreContainer">
              <Link to="/products" className="shop-more">
                ShopMore
              </Link>
            </div>
          </div>

          <p className="item-total">
            ₹{(item.price * item.quantity).toLocaleString("en-IN")}
          </p>
        </div>
      ))}

      <h3 className="cart-total">
        Total: ₹{totalAmount.toLocaleString("en-IN")}
      </h3>
    </div>
  );
};

export default CartItems;
