import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = (props) => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { email, password } = credentials;

  const host = "http://localhost:5000";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // redirect
      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert(
        "Success",
        `Welcome back! See your notes in "My Notes" tab.`
      );
    } else {
      props.showAlert("Danger", "Invalid Credentials");
    }
  };

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container login-container">
        <h1 className="title">Login</h1>
        <form onSubmit={handleSubmit} className="login-form flex">
          <div className="login-field flex">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-input"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              value={email}
              onChange={handleOnChange}
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="login-field flex">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-input"
              id="password"
              name="password"
              value={password}
              onChange={handleOnChange}
              required
            />
            <div id="emailHelp" className="form-text">
              <Link class="nav-link" to="/signup">
                Don't have an account?
              </Link>
            </div>
          </div>
          <button type="submit" className="btn login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
