import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);

  
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  

  if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (password === confirmPassword) {

            return dispatch(sessionActions.signup({ email, username, password }))
            
        }
    };

  return (
    <>
      <h1>Sign Up to TheoZon!</h1>
      
      <form onSubmit={handleSubmit}>
       
        <label> Email
          <input type="text"value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </label>

        <label>Username
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        </label>

        <label>Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>

        <label> Confirm Password
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </label>

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default SignupFormPage;