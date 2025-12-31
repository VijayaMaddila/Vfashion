import { useNavigate } from "react-router-dom";
import "./index.css";

function Wishlist({ wishlist, addToCart, toggleWishlist }) {
  const navigate = useNavigate();

  if (wishlist.length === 0) {
    return <p className="empty">Your wishlist is empty ❤️</p>;
  }

  return (
    <>
      <h1 className="wishlist-heading">Your WishList❤️</h1>
      <ul className="product-list">
        {wishlist.map((product) => {
          const {
            id,
            image,
            name,
            price,
            originalPrice,
            discount,
            rating,
            isBestSeller,
          } = product;

          return (
            <li
              key={id}
              className="product-card"
              onClick={() => navigate(`/product/${id}`)}
            >
              {discount && <span className="discount-badge">{discount}</span>}
              <button
                className="remove-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWishlist(product);
                }}
              >
                {wishlist ? "❤️" : "♡"}
              </button>

              <div className="image-container">
                <img src={image} alt={name} className="product-image" />
              </div>

              <div className="card-content">
                <h3 className="product-name">{name}</h3>

                <div className="rating">
                  <span className="stars">
                    {"★".repeat(Math.floor(rating))}
                    {"☆".repeat(5 - Math.floor(rating))}
                  </span>
                  <span className="rating-value">{rating}</span>
                  {isBestSeller && (
                    <span className="bestseller-tag">Best Seller</span>
                  )}
                </div>

                <div className="price-row">
                  <span className="price">
                    ₹{price.toLocaleString("en-IN")}
                  </span>
                  {originalPrice && (
                    <span className="original-price">
                      ₹{originalPrice.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>

                <div className="wishlist-buttons">
                  <button
                    className="add-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Wishlist;
