"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface CheckBoxContextType {
  checkbox: boolean;
  setCheckbox: Dispatch<SetStateAction<boolean>>;
}

const CheckBoxContext = createContext<CheckBoxContextType | undefined>(
  undefined
);

interface CheckBoxProviderProps {
  children: ReactNode;
}

function CheckBoxProvider({ children }: CheckBoxProviderProps) {
  const [checkbox, setCheckbox] = useState<boolean>(true);

  return (
    <CheckBoxContext.Provider value={{ checkbox, setCheckbox }}>
      {children}
    </CheckBoxContext.Provider>
  );
}

function useCheckBox() {
  const context = useContext(CheckBoxContext);
  if (context === undefined)
    throw new Error("CheckBoxContext was used outside of the CheckBoxProvider");
  return context;
}

export { CheckBoxProvider, useCheckBox };
