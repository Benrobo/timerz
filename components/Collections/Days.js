import { useContext, useState, useEffect } from "react";
import { AddDays, BackNav, Error } from "..";
import DataContext from "../../context/DataContext";

import style from "./style.module.css";

export default function Days() {
  let {
    openAddDays,
    daysVisible,
    monthCardId,
    util,
    deleteMonthCard,
    setMonthCardId,
  } = useContext(DataContext);
  const [monthName, setMonthName] = useState("");
  const [monthtasks, setMonthTasks] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    let localData = util.getDataId(monthCardId);
    localData.map((list, i) => {
      setMonthName(list.month);
      setMonthTasks([...list.month_tasks]);
    });
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
  // this would hold tasks which has multiple days
  let dayStore = "";

  return (
    <>
      <BackNav active={monthName} />

      <div className={style.daysContainer}>
        {monthtasks.length > 0 ? (
          monthtasks.map((list, i) => {
            return (
              <>
                <div
                  className={style.main}
                  key={i}
                  data-days-card
                  data-day-id={list.id}
                  data-month-id={monthCardId}
                >
                  <div className={style.daysCards}>
                    <div className={style.left}>
                      <h2 className={style.h3}>
                        {list.title}
                        <small className={style.days}> {list.day}</small>
                      </h2>
                      <small className={style.small}>{list.subtitle}</small>
                    </div>
                    <div className={style.right}>
                      <span className={style.from}>{list.start} am</span>
                      <span className={style.to}>{list.end} pm</span>
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
                        data-day-id={list.id}
                        data-month-id={monthCardId}
                        onClick={(e) => {
                          hideMore(e);
                          openAddDays();
                        }}
                      >
                        Edit
                      </li>
                      <li
                        className={style.li}
                        data-day-id={list.id}
                        data-month-id={monthCardId}
                        onClick={(e) => {
                          hideMore(e);
                          setMonthCardId(list.id);
                          deleteMonthCard(monthCardId, list.id);
                        }}
                      >
                        Delete
                      </li>
                    </div>
                  </div>
                </div>
                <div className={style.space}></div>;
              </>
            );
          })
        ) : (
          <Error message="No task for this month" />
        )}
        {daysVisible && <AddDays />}
      </div>
    </>
  );
}

function DaysCards({
  tasks,
  day,
  moreAction,
  hideMore,
  monthCardId,
  openAddDays,
}) {
  console.log(day);
  return (
    <>
      {tasks
        .sort((a, b) => a.title - b.title)
        .map((list, i) => {
          return (
            <>
              <div
                className={style.main}
                key={i}
                data-days-card
                data-day-id={list.id}
                data-month-id={monthCardId}
              >
                <div className={style.daysCards}>
                  <div className={style.left}>
                    <h2 className={style.h3}>
                      {list.title}
                      <small className={style.days}> {day}</small>
                    </h2>
                    <small className={style.small}>{list.subtitle}</small>
                  </div>
                  <div className={style.right}>
                    <span className={style.from}>{list.start} am</span>
                    <span className={style.to}>{list.end} pm</span>
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
                      data-day-id={list.id}
                      data-month-id={monthCardId}
                      onClick={(e) => {
                        hideMore(e);
                        openAddDays();
                      }}
                    >
                      Edit
                    </li>
                    <li
                      className={style.li}
                      data-day-id={list.id}
                      data-month-id={monthCardId}
                      onClick={(e) => {
                        hideMore(e);
                      }}
                    >
                      Delete
                    </li>
                  </div>
                </div>
              </div>
              <div className={style.space}></div>;
            </>
          );
        })}
    </>
  );
}
