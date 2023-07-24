import React from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as session from './store/session'
import { useHistory } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {

  const history = useHistory();

  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(session.logout()).then(() => history.push("/login"))
  }

  return (
    <>
      <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route path="/"><Navbar/></Route>
      </Switch>

      <button onClick={handleLogOut}>Log Out!</button>
    </>
  );
}

export default App;
