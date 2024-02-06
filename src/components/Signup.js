import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = (props) => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const { name, email, password, cpassword } = credentials;

  const host = "http://localhost:5000";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // redirect
      localStorage.setItem('token', json.authToken);
      navigate('/');
      props.showAlert("Success", `Welcome ${name}! You can see your created notes in "My Notes" tab.`);
    } else {
      props.showAlert("Danger", "Already Registered or Invalid Details!");
    }
  }

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <div className='container my-2' style={{ "maxWidth": "400px" }}>
      <div className='text-bg-dark' style={{"padding": "2rem 1rem", "borderRadius": "15px" }}>
        <h1 className="text-center my-3" >Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Username</label>
            <input type="text" className="form-control" id="name" name='name' value={name} onChange={handleOnChange} minLength={3} required/>
            <div id="emailHelp" className="form-text text-light">Username must have atleast 3 characters.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={email} onChange={handleOnChange} required />
            <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name='password' value={password} onChange={handleOnChange} minLength={8} required />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="cpassword" name='cpassword' value={cpassword} onChange={handleOnChange} required />
          <div id="emailHelp" className="form-text text-info"><Link class="nav-link" to="/login">Already have an account?</Link></div>
          </div>
          <button type="submit" className="btn btn-primary">Signup</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
