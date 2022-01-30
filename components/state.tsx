import { useState } from "react";
import { createContext, Dispatch, SetStateAction } from "react";
import { Company } from "./types";

const initialState = {
  companies: [] as Company[],
};

export const stateContext = createContext([
  initialState,
  () => initialState,
] as [typeof initialState, Dispatch<SetStateAction<typeof initialState>>]);

const StateProvider: React.FC = ({ children }) => (
  <stateContext.Provider value={useState(initialState)}>
    {children}
  </stateContext.Provider>
);

export default StateProvider;
