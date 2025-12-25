import { useState } from "react";
import "./styles/auth.css";

function Login() {
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP: logic placeholder
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "" || password === "") {
      setError(true);
    } else {
      setError(false);
      // later: localStorage / API logic
      console.log("Login success");
    }
  };

  return (
    <div className="auth-page">
      <div className="login-container">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input name="username" type="text" placeholder="Enter your username" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input name="password" type="password" placeholder="Enter your password" />
          </div>

          <button type="submit">Login</button>
        </form>

        <p>
          Don&apos;t have an account? <a href="/register">Register here</a>
        </p>

        {error && (
          <p style={{ color: "red" }}>
            Invalid Username or Password!
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;
