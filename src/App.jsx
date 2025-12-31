import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"; // <-- no BrowserRouter here
import Navbar from "./Component/NavBar";
import Home from "./Component/HomePage";
import Login from "./Component/Login";
import ProductCard from "./Component/ProductCard";
import Cart from "./Component/CartItems";
import ProductDetails from "./Component/ProductDetails";
import Wishlist from "./Component/wishlist";
import products from "../data";
import Contact from "./Component/Contact";
import ProtectedRoute from "./Component/Protected";

import "./App.css";

function App() {
  // --- cart state
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const cartCount = cartItems.reduce((t, i) => t + i.quantity, 0);

  // --- wishlist state
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <ProductCard
                products={products}
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
                wishlist={wishlist}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist
                wishlist={wishlist}
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductDetails addToCart={addToCart} />
            </ProtectedRoute>
          }
        />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
