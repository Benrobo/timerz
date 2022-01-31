import { createContext } from "react";
import { useState } from "react";

const DataContext = createContext();

export default DataContext;

export function DataContextProvider({ children }) {
  const [monthVisible, setMonthVisible] = useState(false);
  const [daysVisible, setDaysVisible] = useState(false);
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
    setMonthVisible(!monthVisible);
  }

  function openAddDays() {
    setDaysVisible(!daysVisible);
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
        monthVisible,
        daysVisible,
        openModal,
        closeModal,
        openAddMonth,
        openAddDays,
        handleColorActive,
        setColorVal,
        setMonthVisible,
        setDaysVisible,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
