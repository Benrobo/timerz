import { createContext } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
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
  const [day, setDay] = useState("");
  let daysTasksStore = [];
  let mainDaysStore = [];

  // Active cards (months/day)
  const [editState, setEditState] = useState(false);
  const [deleteState, setDeleteState] = useState(false);
  const [monthCardId, setMonthCardId] = useState(null);
  const [daysCardId, setDayCardId] = useState(null);

  // modal show/hide
  function openModal(e) {
    if (Object.entries(e.target.dataset).length > 0) {
      setMonthCardId(e.target.dataset.id);
      let modal = document.querySelector("[data-modal-cont]");
      modal.style.right = "0px";
    }
  }

  function closeModal() {
    setMonthCardId(null);
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

  // console.log(util.getData());

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

    if (editState) {
      let dataBaseOnId = localData.filter((list, i) => {
        return list.id === monthCardId;
      });
      let extractedLocalData = localData.filter((list, i) => {
        return list.id !== monthCardId;
      });
      let updatedPayload = {
        id: monthCardId,
        month: selectedMonth,
        year: selectedYear,
        color: colorVal,
        month_tasks: dataBaseOnId[0].month_tasks,
      };
      // localData.push(updatedPayload);
      localData = [...extractedLocalData, ...[updatedPayload]];

      util.addData(localData);
      util.success("Month updated");
    } else {
      // check if the same month and year exist in localstorage
      let check = localData.map((list, i) => {
        if (list.month === selectedMonth && list.year === selectedYear) {
          return true;
        }
        return false;
      });

      if (check.length === 0) {
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
      if (check.length > 0 && check[check.length - 1] === false) {
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
        return;
      }
      if (check.length > 0 && check[check.length - 1] === true) {
        util.error("Data already exist");
      }
    }
  }

  function createDaysData() {
    if (daysTitle === "") {
      return util.error("title cant be empty");
    } else if (daysSubTitle === "") {
      return util.error("subtitle cant be empty");
    } else if (daysStart === "") {
      return util.error("start time cant be empty");
    } else if (daysEnd === "") {
      return util.error("endtime cant be empty");
    } else if (day === "") {
      return util.error("weeksday cant be empty");
    }

    let daysPayload, prevData, targetMonthData, newData, fullUpdatedData;
    let daysTasks = {
      id: util.genId(),
      day: day,
      title: daysTitle,
      subtitle: daysSubTitle,
      start: daysStart,
      end: daysEnd,
    };

    daysTasksStore.push(daysTasks);

    const localData = util.getDataId(monthCardId);

    targetMonthData = util.getDataId(monthCardId);
    targetMonthData[0].month_tasks = [
      ...targetMonthData[0].month_tasks,
      ...daysTasksStore,
    ];

    // save both the previous data and updated data in localstorage
    prevData = util.getData();

    newData = prevData.filter((list, id) => {
      return list.id !== monthCardId;
    });

    fullUpdatedData = [...newData, ...targetMonthData];

    localStorage.setItem("timerz", JSON.stringify(fullUpdatedData));
    // hide addDaysForm
    openAddDays();
    util.success("days added");
  }

  // delete data
  async function deleteData(id) {
    let restData = util.deleteData(id);
    let confirm = window.confirm(
      "All records added for this month would be wiped away, are you sure."
    );
    if (confirm) {
      localStorage.setItem("timerz", JSON.stringify(restData));
      util.success("Record deleted");
      return;
    }
  }

  function deleteMonthCard(monthId, cardId) {
    let dayData = util
      .getDataId(monthId)
      .map((list, _) => {
        return list.month_tasks;
      })[0]
      .filter((list, _) => {
        return list.id !== cardId;
      });
    let restData = util.getDataId(monthId);
    restData[0].month_tasks = dayData;

    let localData = util.deleteData(monthId);
    const fullUpdatedData = [...localData, ...restData];

    localStorage.setItem("timerz", JSON.stringify(fullUpdatedData));
    setMonthCardId("dfvdfvdf");
    util.success("succesfully deleted");
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
        day,
        monthCardId,
        daysCardId,
        editState,
        deleteState,
        motion,
        deleteMonthCard,
        createDaysData,
        deleteData,
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
        setDay,
        createData,
        setMonthCardId,
        setDayCardId,
        setEditState,
        setDeleteState,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
