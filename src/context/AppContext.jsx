import React, { createContext, useReducer } from 'react';

export const AppContext = createContext();

const initialState = { theme: 'dark' };

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME': 
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
    default: 
      return state;
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};





