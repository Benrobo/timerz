import { createContext } from "react";
import { useState } from "react";

const DataContext = createContext();

export default DataContext;

export function DataContextProvider({ children }) {
  // modal show/hide

  function openModal() {
    let modal = document.querySelector("[data-modal-cont]");
    modal.style.right = "-100px";
  }

  return (
    <DataContext.Provider value={{ openModal }}>
      {children}
    </DataContext.Provider>
  );
}
