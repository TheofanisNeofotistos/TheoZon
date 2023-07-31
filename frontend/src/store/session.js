import { getCartItems , resetCart} from "./cart.js";
import csrfFetch from "./csrf.js";

export const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';

const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user 
});

const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
});

const storeCSRFToken = response => {
  const csrfToken = response.headers.get("X-CSRF-Token");
  if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
}

const storeCurrentUser = (user) => {
  if (user) 
  {sessionStorage.setItem("currentUser", JSON.stringify(user))}
  else sessionStorage.removeItem("currentUser");
}

export const login = ({ email, password }) => async dispatch => {
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({ email, password })
  });
  if(response.ok){
    const data = await response.json();
    if(data.errors) throw data
      storeCurrentUser(data.user);
      dispatch(setCurrentUser(data.user));
      dispatch(getCartItems())
  } else {
    throw response
  }
  return response;
};

export const restoreSession = () => async dispatch => {
  const response = await csrfFetch("/api/session");
  storeCSRFToken(response);
  const data = await response.json();
  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  return response;
};

export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password
    })
  });
  if(response.ok){
    const data = await response.json();
    if(data.errors) throw data
      storeCurrentUser(data.user);
      dispatch(setCurrentUser(data.user));
  } else {
    throw response
  }
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE"
  });
  storeCurrentUser(null);
  dispatch(removeCurrentUser());
  dispatch(resetCart())
  return response;
};

const initialState = { 
  user: JSON.parse(sessionStorage.getItem("currentUser"))
};

const sessionReducer = (state = initialState, action) => {
  let newState ={...state}

  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...newState, user: action.payload  };
    case REMOVE_CURRENT_USER:
      return { ...newState, user: null };
    default:
      return state;
  }
};

export default sessionReducer;
