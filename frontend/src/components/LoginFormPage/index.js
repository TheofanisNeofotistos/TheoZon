import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginForm.css';

function LoginFormPage() {

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  
  const sessionUser = useSelector(state => state.session.user);
  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();

    return dispatch(sessionActions.login({ email, password }))
      
  };

  return (
    <>
      <img src="./images/TheoZon.jpg" alt="TheoZon"></img>

      <form onSubmit={handleSubmit}>
        
        <label> Email
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </label>

        <label>Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>

        <button type="submit">Log In</button>

      </form>

    </>
  );
}

export default LoginFormPage;