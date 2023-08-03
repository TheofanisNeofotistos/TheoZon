import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import HomePage from "./components/HomePage";
import ProductShow from "./components/ProductsShow";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/session";
import Cart from "./components/Cart";
import SearchShowPage from "./components/SearchShowPage";
import { getCartItems } from "./store/cart";

function App() {
  const dispatch = useDispatch()

  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))

  useEffect(()=>{
    
      dispatch(setCurrentUser(currentUser));
    
  },[])

  useEffect(()=>{
    dispatch(getCartItems(currentUser?.id))
  },[])
 

  return (
    <>
      <Switch>
        <Route exact path="/login">
          <LoginFormPage />
        </Route>

        <Route exact path="/signup">
          <SignupFormPage />
        </Route>

        <Route exact path="/products/:productId">
          <ProductShow/>
        </Route>

        <Route exact path="/cart">
          <Cart/>
        </Route>

        <Route exact path="/"><HomePage/></Route>

        <Route path="/search">
            <SearchShowPage/>
        </Route>

      </Switch>


    </>
  );
}

export default App;
