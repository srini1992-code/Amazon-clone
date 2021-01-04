import React, { createContext, useContext, useReducer } from 'react';

// prepares the datalayer
export const StateContext = createContext();

// wrap our app and provide the datalayer to everything with init
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull info from data layer
export const useStateValue = () => useContext(StateContext);
