import { useState } from "react";
import ProductItem from "../ProductItem";
import "./index.css";

const ProductCard = ({ products, addToCart, toggleWishlist, wishlist }) => {
  const [input, setInput] = useState("");
  const [sortType, setSortType] = useState("");
  const [searchTerm, setTermSearch] = useState("");

  const onSearch = () => {
    setTermSearch(input);
  };

  const searchForFav = (event) => {
    setInput(event.target.value);
  };

  const filteredProducts = products.filter(
    (eachItem) =>
      eachItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      eachItem.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === "priceLow") return a.price - b.price;
    if (sortType === "priceHigh") return b.price - a.price;
    if (sortType === "brand") return a.brand.localeCompare(b.brand);
    if (sortType === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div>
      <div className="search-container">
        <input
          className="search-input"
          type="search"
          value={input}
          onChange={searchForFav}
          placeholder="Search V.fashion"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
        />
        <span onClick={onSearch}>
          <img
            className="search-emoji"
            src="https://static.vecteezy.com/system/resources/thumbnails/009/652/218/small/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg"
          />
        </span>
      </div>

      <div className="sort-container">
        <select
          className="sort-select"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="priceLow">Price: Low → High</option>
          <option value="priceHigh">Price: High → Low</option>
          <option value="brand">Brand (A–Z)</option>
          <option value="rating">Rating (High → Low)</option>
        </select>
      </div>

      <ul className="product-list">
        {sortedProducts.map((eachProduct) => (
          <ProductItem
            key={eachProduct.id}
            product={eachProduct}
            addToCart={addToCart}
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;
