import { createContext } from "react";
import { useState } from "react";

const DataContext = createContext();

export default DataContext;

export function DataContextProvider({ children }) {
  const [formvisibility, setFormVisibility] = useState(false);
  const [colorVal, setColorVal] = useState("");
  // modal show/hide

  function openModal() {
    let modal = document.querySelector("[data-modal-cont]");
    modal.style.right = "0px";
  }

  function closeModal() {
    let modal = document.querySelector("[data-modal-cont]");
    modal.style.right = "-1500px";
  }

  function openAddMonth() {
    setFormVisibility(!formvisibility);
  }

  function handleColorActive(e) {
    let elm = e.target;
    let colorVal = e.target.dataset;
    setColorVal(colorVal.value);
  }

  return (
    <DataContext.Provider
      value={{
        colorVal,
        formvisibility,
        openModal,
        closeModal,
        openAddMonth,
        handleColorActive,
        setColorVal,
        setFormVisibility,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
