import { useContext, useState, useEffect } from "react";
import { AddDays, BackNav } from "..";
import DataContext from "../../context/DataContext";

import style from "./style.module.css";

export default function Days({
  title = "January",
  tasks = ["2", "23"],
  days = "Monday",
  subtitle = "a must for me",
}) {
  let { openAddDays, daysVisible, monthCardId, util } = useContext(DataContext);
  const [monthName, setMonthName] = useState("");
  const [monthtasks, setMonthTasks] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  let localData = util.getDataId(monthCardId);

  useEffect(() => {
    console.log(localData);
  }, [monthCardId]);

  function moreAction(e) {
    let parent = e.target.parentElement;
    let action = parent.querySelector("[data-more-action]");
    if (clickCount > 0) {
      action.style.display = "none";
      setClickCount(0);
      return;
    }
    action.style.display = "flex";
    setClickCount((clickCount += 1));
  }

  // hide more container when li is clicked
  function hideMore(e) {
    let parent = e.target.parentElement.parentElement;
    let action = parent.querySelector("[data-more-action]");
    action.style.display = "none";
    setClickCount(0);
  }

  return (
    <>
      <BackNav active="February" />

      <div className={style.daysContainer}>
        {Array.from("12").map((_, i) => {
          return (
            <div className={style.main} key={i} data-days-card>
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
                <img
                  src="/img/icons/more.png"
                  className={style.moreBtn}
                  onClick={(e) => {
                    moreAction(e);
                  }}
                />
                {/* more container */}
                <div className={style.moreCont} data-more-action>
                  <li
                    className={style.li}
                    onClick={(e) => {
                      hideMore(e);
                      openAddDays();
                    }}
                  >
                    Edit
                  </li>
                  <li
                    className={style.li}
                    onClick={(e) => {
                      hideMore(e);
                    }}
                  >
                    Delete
                  </li>
                </div>
              </div>
              <div className={style.space}></div>
            </div>
          );
        })}

        {daysVisible && <AddDays />}
      </div>
    </>
  );
}
