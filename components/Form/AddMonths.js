import { useEffect, useContext } from "react";

import DataContext from "../../context/DataContext";

import style from "./style.module.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function AddMonths() {
  const {
    colorVal,
    selectedMonth,
    selectedYear,
    createData,
    openAddMonth,
    monthCardId,
    setSelectedMonth,
    setSelectedYear,
    setColorVal,
    setMonthCardId,
    util,
  } = useContext(DataContext);

  // get years
  let years = [];
  for (let i = new Date().getFullYear(); i < 2099; i++) {
    years.push(i);
  }

  let monthData = util.getDataId(monthCardId)[0];

  // console.log("add month data", monthData);

  // update color val
  useEffect(() => {
    if (monthData !== undefined) {
      setColorVal(monthData.color);
      setSelectedMonth(monthData.month);
      setSelectedYear(monthData.year);
    }
  }, []);

  return (
    <div
      className={style.formModal}
      data-form-modal
      onClick={(e) => {
        let elm = e.target.dataset;
        if (elm.formModal === false) {
          return openAddMonth();
        }
      }}
    >
      <div className={style.formCont} data-months-form>
        <div className={style.line}></div>
        <div className={style.head}>
          <h3 className={style.h3}>Add Collection</h3>
        </div>
        <div className={style.top}>
          <div className={style.box}>
            <label htmlFor="" className={style.label}>
              Month
            </label>
            <select
              className={style.select}
              onChange={(e) => {
                setSelectedMonth(e.target.value);
              }}
            >
              <option value={monthData !== undefined ? monthData.month : ""}>
                {monthData !== undefined ? monthData.month : "Select Month"}
              </option>

              {months.map((list, i) => (
                <option value={list} key={i}>
                  {list}
                </option>
              ))}
            </select>
          </div>
          <div className={style.box}>
            <label htmlFor="" className={style.label}>
              Year
            </label>
            <select
              className={style.select}
              onChange={(e) => {
                setSelectedYear(e.target.value);
              }}
            >
              <option value={monthData !== undefined ? monthData.year : ""}>
                {monthData !== undefined ? monthData.year : "Select Year"}
              </option>
              {years.map((list, i) => {
                return (
                  <option value={list} key={i}>
                    {list}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className={style.middle}>
          <div className={style.box}>
            <label
              htmlFor=""
              style={{
                color: `#${colorVal}`,
                fontWeight: 900,
                transition: ".2s ease",
              }}
            >
              Colors
            </label>
            <div className={style.colorsContainer}>
              <Colors />
            </div>
          </div>
          <div className={style.box}>
            <label htmlFor="">Custom Colors</label>
            <input
              type="button"
              className={style.customColor}
              style={{ background: `#${colorVal}` }}
              onClick={(e) => {
                e.target.type = "color";
              }}
              onChange={(e) => {
                setColorVal(e.target.value.replace("#", ""));
              }}
            />
          </div>
        </div>
        <div className={style.bottom}>
          <button
            className={style.cancel}
            onClick={() => {
              openAddMonth();
              setMonthCardId(null);
            }}
          >
            Cancel
          </button>
          <button
            className={style.create}
            onClick={() => {
              createData();
              if (
                colorVal !== "" &&
                selectedMonth !== "" &&
                selectedYear !== ""
              ) {
                openAddMonth();
              }
            }}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

function Colors() {
  const { handleColorActive } = useContext(DataContext);
  let colors = ["9B45D1", "FF008A", "00FFC2"];

  return (
    <>
      {colors.map((list, i) => {
        return (
          <div
            className={style.colorPallete}
            data-colors
            key={i}
            data-value={list}
            style={{ background: `#${colors[i]}` }}
            onClick={(e) => {
              handleColorActive(e);
            }}
          ></div>
        );
      })}
    </>
  );
}
