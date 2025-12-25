import "./styles/auth.css";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered");
  };

  return (
    <div className="auth-page">
      <div className="login-container">
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="input-group">
            <label>Username</label>
            <input type="text" placeholder="Enter your username" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
