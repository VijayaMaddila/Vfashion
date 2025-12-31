import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">New Arrivals 2025</p>
        <h1 className="hero-title">
          Redefining Fashion
          <br />
          <span className="hero-highlight">For Every Style.</span>
        </h1>

        <p className="hero-description">
          Discover premium fashion designed for confidence and comfort. From
          everyday essentials to standout trends, V.Fashion brings you styles
          that fit every moment.
        </p>

        <div className="hero-cta">
          <Link to="/products" className="btn-primary">
            Shop Collection
          </Link>
          <Link to="/wishlist" className="btn-secondary">
            Buy Now YoursFav
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Home;
