import { useEffect, useContext } from "react";

import DataContext from "../../context/DataContext";

import style from "./style.module.css";

export default function AddDays() {
  const { colorVal, setColorVal, openAddMonth } = useContext(DataContext);

  return (
    <div className={style.daysModal} data-form-modal>
      <div className={style.formCont} data-months-form>
        <div className={style.line}></div>
        <div className={style.head}>
          <h3 className={style.h3}>Add Tasks</h3>
        </div>
        <div className={style.top}></div>
        <div className={style.middle}></div>
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
