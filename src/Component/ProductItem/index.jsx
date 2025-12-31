import { useNavigate } from "react-router-dom";
import "./index.css";

function ProductItem({ product, addToCart, toggleWishlist, wishlist }) {
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

  const navigate = useNavigate();

  // Safe check for wishlist
  const isWishlisted = wishlist?.some((item) => item.id === product.id);

  const openDetails = () => {
    navigate(`/product/${id}`);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const onAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <li className="product-card" onClick={openDetails}>
      {discount && <span className="discount-badge">{discount}</span>}

      <button className="wishlisted" onClick={handleWishlist}>
        {isWishlisted ? "❤️" : "♡"}
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
          {isBestSeller && <span className="bestseller-tag">Best Seller</span>}
        </div>

        <div className="price-row">
          <span className="price">₹{price.toLocaleString("en-IN")}</span>
          {originalPrice && (
            <span className="original-price">
              ₹{originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        <button className="add-btn" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </li>
  );
}

export default ProductItem;
