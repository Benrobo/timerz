import { createContext } from "react";
import { useState } from "react";
import { Util } from "../util";
const DataContext = createContext();

export default DataContext;

// utility instance
const util = new Util();

export function DataContextProvider({ children }) {
  const [monthVisible, setMonthVisible] = useState(false);
  const [daysVisible, setDaysVisible] = useState(false);
  const [colorVal, setColorVal] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  // const [selectedDays, setSelectedDays] = useState("")
  const [daysTitle, setDaysTitle] = useState("");
  const [daysSubTitle, setDaysSubTitle] = useState("");
  const [daysStart, setDaysStart] = useState("");
  const [daysEnd, setDaysEnd] = useState("");

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

  console.log(util.getData());

  function createData() {
    console.log(selectedYear, selectedMonth);
    if (selectedMonth === "") {
      return util.error("months isnt selected");
    } else if (selectedYear === "") {
      return util.error("year isnt selected");
    } else if (colorVal === "") {
      return util.error("color isnt selected");
    }

    let localData = util.getData();

    let newPayload = {
      id: util.genId(),
      month: selectedMonth,
      year: selectedYear,
      color: colorVal,
      month_tasks: [],
    };

    localData.push(newPayload);

    util.addData(localData);
    util.success("Month saved");
  }

  return (
    <DataContext.Provider
      value={{
        colorVal,
        monthVisible,
        daysVisible,
        selectedMonth,
        selectedYear,
        util,
        daysTitle,
        daysSubTitle,
        daysStart,
        daysEnd,
        openModal,
        closeModal,
        openAddMonth,
        openAddDays,
        handleColorActive,
        setColorVal,
        setMonthVisible,
        setDaysVisible,
        setSelectedMonth,
        setSelectedYear,
        setDaysTitle,
        setDaysSubTitle,
        setDaysStart,
        setDaysEnd,
        createData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
