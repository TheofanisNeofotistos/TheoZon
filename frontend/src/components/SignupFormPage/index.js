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

      <img className="signupLogo" src="./TheoZonLogo.png" alt="TheoZon"></img>

      <div className="signupContainer">
        
        <div className="singupFormContainer">

          <form onSubmit={handleSubmit}>

            <h2>Create Account</h2>

            <p className="signupNameHeader">Your name</p>
            <label >
              <input class="signupCredentialsField" placeholder="First and last name" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
            </label>

            <p className="signupEmailHeader">Email</p>
            <label > 
              <input class="signupCredentialsField" type="text"value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </label>

            <p className="signupPasswordHeader">Password</p>
            <label >
              <input class="signupCredentialsField" placeholder="At least 6 characters" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>

            <p className="signupPasswordHeader">Re-enter Password</p>
            <label > 
              <input class="signupCredentialsField" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </label>
            <br/>

            <button class="createButton" type="submit">Continue</button>
            <p className="loginAgreement">By creating an account, you agree to TheoZon's Conditions of Use and Privacy Notice .</p>
          </form>
          
        </div>

      </div>
    </>
  );
}

export default SignupFormPage;