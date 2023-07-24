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

      <img className="loginLogo" src="./TheoZonLogo.png" alt="TheoZon"></img>
      
      <div className="loginContainer">
        <br/>

        <div className="loginFormContainer">
          <form onSubmit={handleSubmit}>

            <h2 className="formSigninHeader">Sign In</h2>

            <p className="loginEmailHeader">Email</p>

            <label > 
              <input className="credentialsField" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </label>

            <br/>

            <p className="loginPasswordHeader">Password</p>
            <label >
              <input className="credentialsField" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>

            <br/>

            <button className="signinButton" type="submit">Sign In</button>
            <br/>
            <button className="signinButton" type="submit">Demo User</button>
            <br/>
            <p className="loginAgreement">By continuing, you agree to TheoZon's Conditions of Use and Privacy Notice .</p>

          </form>
        </div>
      
      </div>

    </>
  );
}

export default LoginFormPage;