import { useContext } from "react";

import DataContext from "../../context/DataContext";

import style from "./style.module.css";

export default function Days({
  title = "January",
  tasks = ["2", "23"],
  days = "Monday",
  subtitle = "a must for me",
}) {
  let { openModal } = useContext(DataContext);

  return (
    <>
      <div className={style.daysContainer}>
        {Array.from("1, 2, 3, 4, 4,5,6,6,7,").map((_, i) => {
          return (
            <div className={style.main} key={i}>
              <p className={style.p}>{days}</p>
              <div className={style.daysCards}>
                <div className={style.left}>
                  <h2 className={style.h3}>{title}</h2>
                  <small className={style.small}>{subtitle}</small>
                </div>
                <div className={style.right}>
                  <span className={style.from}>09:20 am</span>
                  <span className={style.to}>12:30 pm</span>
                </div>
                <img src="/img/icons/more.png" className={style.moreBtn} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
