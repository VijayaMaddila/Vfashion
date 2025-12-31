import { useParams } from "react-router-dom";
import products from "../../../data";
import "./index.css";

const ProductDetails = ({ wishlist, addToCart, toggleWishlist }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  const {
    name,
    brand,
    price,
    originalPrice,
    rating,
    image,
    sizes,
    colors,
    material,
    fit,
    description,
    reviews,
    discount,
  } = product;
  const onAddToCart = () => {
    addToCart(product);
  };

  const discountPercentage =
    originalPrice && price < originalPrice
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : null;

  return (
    <div className="details-container">
      <div className="details-image">
        <img src={image} alt={name} />
      </div>

      <div className="details-content">
        <h1 className="details-name">{name}</h1>
        <p className="details-brand">Brand: {brand}</p>
        <div className="details-rating">⭐ {rating} / 5</div>

        <div className="details-price">
          <span className="price">₹{price}</span>
          {price < originalPrice && (
            <>
              <span className="original">₹{originalPrice}</span>
              <span className="discount">({discountPercentage}% OFF)</span>
            </>
          )}
        </div>

        {description && <p className="details-description">{description}</p>}

        {sizes?.length > 0 && (
          <div className="details-section">
            <h4>Available Sizes</h4>
            <div className="options">
              {sizes.map((size) => (
                <span key={size} className="option">
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        {colors?.length > 0 && (
          <div className="details-section">
            <h4>Colors</h4>
            <div className="options">
              {colors.map((color) => (
                <span key={color} className="option">
                  {color}
                </span>
              ))}
            </div>
          </div>
        )}

        {material && (
          <p>
            <strong>Material:</strong> {material}
          </p>
        )}
        {fit && (
          <p>
            <strong>Fit:</strong> {fit}
          </p>
        )}

        {reviews?.length > 0 && (
          <div className="details-section">
            <h4>Customer Reviews</h4>
            {reviews.map((review, index) => (
              <div key={index} className="review">
                <strong>{review.user}</strong> ⭐ {review.rating}
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        )}

        <div className="buttons">
          <button className="add-btn" onClick={onAddToCart}>
            Add to Cart
          </button>
          <button className="add-btn" onClick={toggleWishlist}>
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
