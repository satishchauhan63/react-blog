import React, { useState } from "react";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your login logic here
  };

  return (
    <>
    <div className="bgrnd p-5 ">
    <div className="login-container ">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label className="lvl">
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label className="lvl">
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
    </>
  );
}

export default Login;

