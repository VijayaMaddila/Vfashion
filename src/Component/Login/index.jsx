import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import users from "../../../users";
import "./index.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("user", JSON.stringify(foundUser));
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="img-container">
        <img
          src="https://i.pinimg.com/1200x/7c/6f/0b/7c6f0b4a6d443a2e0de3ccd618a7e21b.jpg"
          className="mainImg"
          alt="fashion"
        />
        <p className="logo-Name">V.fashion</p>
      </div>

      <div className="login-card">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="signup-text">
            Don’t have an account?{" "}
            <Link to="/signup" className="SignUp">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
