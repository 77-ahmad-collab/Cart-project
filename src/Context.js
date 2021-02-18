import React, { useContext, useReducer } from "react";
import Data from "./Components/Data";
import cartarray from "./CartReducer";
import { useEffect } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  console.log(Data);
  const initialstate = {
    loading: false,
    total: 0,
    cart: Data,
    amount: 1,
  };
  const [state, dispatch] = useReducer(cartarray, initialstate);
  useEffect(() => {
    dispatch({ type: "GETTOTAL" });
  }, [state.cart]);

  const clearcart = () => {
    console.log("clear cart");
    dispatch({ type: "CLEARCART" });
  };
  const removeitem = (id) => {
    dispatch({ type: "REMOVEITEM", payload: id });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  return (
    <AppContext.Provider
      value={{ ...state, clearcart, removeitem, increase, decrease }}
    >
      {children}
    </AppContext.Provider>
  );
};

const UseGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, UseGlobalContext };
