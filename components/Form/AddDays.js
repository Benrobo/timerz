import { useEffect, useContext } from "react";

import DataContext from "../../context/DataContext";

import style from "./style.module.css";

export default function AddDays() {
  let {
    openAddDays,
    daysTitle,
    daysSubTitle,
    daysStart,
    daysEnd,
    day,
    setDaysTitle,
    setDaysSubTitle,
    setDaysStart,
    setDaysEnd,
    setDay,
    createDaysData,
    monthCardId,
    setMonthCardId,
  } = useContext(DataContext);

  return (
    <div className={style.daysModal} data-form-modal>
      <div className={style.formCont} data-months-form>
        <div className={style.line}></div>
        <div className={style.head}>
          <h3 className={style.h3}>Add Tasks</h3>
        </div>
        <div className={style.top}>
          <div className={style.daysbox}>
            <div className={style.cont}>
              <label htmlFor="" className={style.label}>
                Title
              </label>
              <input
                type="text"
                className={style.input}
                placeholder="title"
                maxLength={30}
                defaultValue={daysTitle}
                onChange={(e) => setDaysTitle(e.target.value)}
              />
            </div>
            <div className={style.cont}>
              <label htmlFor="" className={style.label}>
                Days
              </label>
              <select
                className={style.day}
                id=""
                onChange={(e) => setDay(e.target.value)}
              >
                <option value={day === "" ? "" : day}>
                  {day === "" ? "-- Select Day" : day}
                </option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </div>
          </div>
          <div className={style.box}>
            <label htmlFor="" className={style.label}>
              Subtitle
            </label>
            <input
              type="text"
              className={style.input}
              placeholder="subtitle"
              maxLength={30}
              defaultValue={daysSubTitle}
              onChange={(e) => setDaysSubTitle(e.target.value)}
            />
          </div>
        </div>
        <div className={style.middle}>
          <div className={style.box}>
            <label htmlFor="" className={style.label}>
              Start (am)
            </label>
            <input
              type="time"
              className={style.time}
              maxLength={4}
              defaultValue={daysStart}
              onChange={(e) => setDaysStart(e.target.value)}
            />
          </div>
          <div className={style.box}>
            <label htmlFor="" className={style.label}>
              End (pm)
            </label>
            <input
              type="time"
              className={style.time}
              maxLength={4}
              defaultValue={daysEnd}
              onChange={(e) => setDaysEnd(e.target.value)}
            />
          </div>
        </div>
        <div className={style.bottom}>
          <button
            className={style.cancel}
            onClick={() => {
              openAddDays();
            }}
          >
            Cancel
          </button>
          <button
            className={style.create}
            onClick={(e) => {
              createDaysData();
              setMonthCardId(monthCardId);
            }}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
