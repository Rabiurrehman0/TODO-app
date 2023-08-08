import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

export const GlobalContext = createContext("Initial Value");
let data = {
  user: undefined,
  cart: [],
};

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, data);

  useEffect(() => {}, [state.user, state.cart]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
