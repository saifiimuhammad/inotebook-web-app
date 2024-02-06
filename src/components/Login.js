import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = (props) => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({email: "", password: ""});
  const { email, password } = credentials;
  
  const host = "http://localhost:5000";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
    });
     const json = await response.json();
     console.log(json);
     if(json.success) {
      // redirect
      localStorage.setItem('token', json.authToken);
      navigate('/');
      props.showAlert("Success", `Welcome back! See your notes in "My Notes" tab.`);
     } else {
      props.showAlert("Danger", "Invalid Credentials");
     }
  }

  const handleOnChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  }

  return (
    <div className='container my-3' style={{"maxWidth": "400px"}}>
      <div className='text-bg-dark' style={{"marginTop": "5rem", "padding": "2rem 1rem", "borderRadius": "15px"}}>
      <h1 className="text-center my-3" >Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={email} onChange={handleOnChange} required/>
          <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' value={password} onChange={handleOnChange} required/>
        <div id="emailHelp" className="form-text text-info"><Link class="nav-link" to="/signup">Don't have an account?</Link></div>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      </div>
    </div>
  )
}

export default Login
