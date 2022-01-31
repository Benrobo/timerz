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
  const { colorVal, setColorVal, openAddMonth } = useContext(DataContext);

  // get years
  let years = [];
  for (let i = new Date().getFullYear(); i < 2099; i++) {
    years.push(i);
  }

  //   let colorCont = document.querySelectorAll("[data-colors]");

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
            <select className={style.select}>
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
            <select className={style.select}>
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
            }}
          >
            Cancel
          </button>
          <button className={style.create}>Create</button>
        </div>
      </div>
    </div>
  );
}

function Colors() {
  const { handleColorActive } = useContext(DataContext);
  let colors = ["9B45D1", "FFD600", "00FFC2", "FF008A"];

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
