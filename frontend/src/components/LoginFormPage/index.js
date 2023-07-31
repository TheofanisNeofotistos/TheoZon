import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginForm.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function LoginFormPage() {

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors,setErrors] = useState([])
  
  
  const sessionUser = useSelector(state => state.session.user);
  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors([])

    dispatch(sessionActions.login({ email, password })).catch( async (response) => {
      let data; 
        try {
          data = await response.clone().json()
        } catch {
          // data = await response.text()
        }
        if(data?.errors){
          setErrors(data.errors)
        } else if(data){
          setErrors([data])
        } else{
          setErrors([response.statusText])
        }
    })
  };

  const handleDemoLogin = () => {
    dispatch(sessionActions.login({email:"demo@demo.com", password:"password"}))
  }

  const getErrorsByField = (field) => {
    if(errors){
      return errors.find((error) => {
        return error.includes(field)
      })
    }else {
      return false
    }
  }

  return (
    <>

      <img className="loginLogo" src="./TheoZonLogo.png" alt="TheoZon"></img>
      
      <div className="loginContainer">
        <br/>

        <div className="loginFormContainer">
          <form onSubmit={handleSubmit}>

            <h2 className="formSigninHeader">Sign In</h2>
            
              {getErrorsByField("email")? <span className="loginError">{getErrorsByField("email")}</span>: <span></span>}

            <p className="loginEmailHeader">Email</p>

            <label > 
              <input className="credentialsField" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </label>
            
            <p className="loginPasswordHeader">Password</p>
              {/* {getErrorsByField("password")? <span className="loginError">{getErrorsByField("password")}</span>: <span></span>} */}
            <label >
              <input className="credentialsField" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>

            <button className="signinButton" type="submit">Sign In</button>
            <button className="signinButton" onClick={handleDemoLogin} type="submit">Demo User</button>
            <br/>
            <p className="loginAgreement">By continuing, you agree to TheoZon's Conditions of Use and Privacy Notice .</p>

          </form>
          <br/>
          <p className="newToTheoZon">New to TheoZon?</p>
          <Link className="signupLink" to="/signup"> Create your TheoZon Account</Link>
        </div>

      
      </div>

    </>
  );
}

export default LoginFormPage;