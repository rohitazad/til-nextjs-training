'use client';

import React, { createContext, useContext, useReducer } from 'react';
import combineReducers from './combinedReducers';
import loginReducer from '../Reducers/loginReducer.js';

const initialState = {
  login: {
    isLogin: false,
    userInfo: {},
    ssoid: '',
    ticketId: '',
    error: null,
  },
};
const StateContext = createContext();

export function StateProvider({ children }) {
  const [state, dispatch] = useReducer(
    combineReducers({
      login: loginReducer,
    }),
    initialState
  );

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}
export function useStateContext() {
  return useContext(StateContext);
}
