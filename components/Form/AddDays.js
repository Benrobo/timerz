import { useEffect, useContext } from "react";

import DataContext from "../../context/DataContext";

import style from "./style.module.css";

export default function AddDays() {
  let { openAddDays } = useContext(DataContext);

  return (
    <div className={style.daysModal} data-form-modal>
      <div className={style.formCont} data-months-form>
        <div className={style.line}></div>
        <div className={style.head}>
          <h3 className={style.h3}>Add Tasks</h3>
        </div>
        <div className={style.top}>
          <div className={style.box}>
            <label htmlFor="" className={style.label}>
              Title
            </label>
            <input
              type="text"
              className={style.input}
              placeholder="title"
              maxLength={30}
            />
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
            />
          </div>
        </div>
        <div className={style.middle}>
          <div className={style.box}>
            <label htmlFor="" className={style.label}>
              Start
            </label>
            <input type="time" className={style.time} maxLength={4} />
          </div>
          <div className={style.box}>
            <label htmlFor="" className={style.label}>
              End
            </label>
            <input type="time" className={style.time} maxLength={4} />
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
          <button className={style.create}>Create</button>
        </div>
      </div>
    </div>
  );
}
