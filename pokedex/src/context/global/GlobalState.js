import { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

export const GlobalState = (props) => {
  const [pokedex, setPokedex] = useState([]);

  const states = { pokedex };
  const setters = { setPokedex };
  const requests = {};

  return (
    <>
      <GlobalStateContext.Provider value={{ states, setters, requests }}>
        {props.children}
      </GlobalStateContext.Provider>
    </>
  );
};
