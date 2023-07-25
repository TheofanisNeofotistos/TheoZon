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
  const [errors,setErrors] = useState([])
  

  if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (password === confirmPassword) {

            dispatch(sessionActions.signup({ email, username, password })).catch( async (response) => {
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
        } else {
          setErrors(["Passwords must match"])
        }
        
    };

    const getErrorsByField = (field) => {
      return errors.find((error) => {
        return error.includes(field)
      })
    }

  return (
    <>

      <img className="signupLogo" src="./TheoZonLogo.png" alt="TheoZon"></img>

      <div className="signupContainer">
        
        <div className="singupFormContainer">

          <form onSubmit={handleSubmit}>

            <h2 className="createAccountHeader">Create Account</h2>

            <p className="signupNameHeader">Your name</p>
            <label >
              <input className={getErrorsByField("Username")? "signupCredentialsFieldErrors":"signupCredentialsField"} placeholder="First and last name" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            {getErrorsByField("Username")? <span className="loginError">{getErrorsByField("Username")}</span>: <span></span>}

            <p className="signupEmailHeader">Email</p>
            <label > 
              <input className={getErrorsByField("Email")? "signupCredentialsFieldErrors":"signupCredentialsField"}  type="text"value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            {getErrorsByField("Email")? <span className="loginError">{getErrorsByField("Email")}</span>: <span></span>}

            <p className="signupPasswordHeader">Password</p>
            <label >
              <input className={getErrorsByField("Password")? "signupCredentialsFieldErrors":"signupCredentialsField"} placeholder="At least 6 characters" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            {getErrorsByField("Password")? <span className="loginError">{getErrorsByField("Password")}</span>: <span></span>}

            <p className="signupPasswordHeader">Re-enter Password</p>
            <label > 
              <input className="signupCredentialsField" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </label>
            
            <br/>
            <button className="createButton" type="submit">Continue</button>
            <p className="loginAgreement">By creating an account, you agree to TheoZon's Conditions of Use and Privacy Notice .</p>
          </form>
          
        </div>

      </div>
    </>
  );
}

export default SignupFormPage;