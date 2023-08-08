import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

export const GlobalContext = createContext("Initial Value");

const getcart = () => {
  const cartdata = localStorage.getItem("cart");
  if (cartdata == "[]") {
    return [];
  } else {
    return JSON.parse(cartdata);
  }
};

const getuser = () => {
  const userdata = localStorage.getItem("currentUser");
  if (userdata == "null") {
    return undefined;
  } else {
    return JSON.parse(userdata);
  }
};

let data = {
  user: getuser(),
  cart: getcart(),
};

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, data);

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(state.user));
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.user, state.cart]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
