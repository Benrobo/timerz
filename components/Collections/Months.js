import style from "./style.module.css";
import { useContext, useState } from "react";

import DataContext from "../../context/DataContext";

export default function Months({ data }) {
  let {
    openModal,
    openAddMonth,
    deleteData,
    setMonthCardId,
    setEditState,
    setDeleteState,
    motion,
  } = useContext(DataContext);

  const [clickCount, setClickCount] = useState(0);

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

  // motion
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      {data !== undefined && data !== null && data.length > 0 ? (
        data.map((list, i) => {
          return (
            <motion.div
              animate={{ y: [-500, 100, 0] }}
              transition={{ duration: 1 }}
              variants={variants}
              className={style.cards}
              key={i}
              data-id={list.id}
            >
              <div className={style.left}>
                <img
                  src="/img/icons/shield.png"
                  alt=""
                  className={style.icon}
                  style={
                    list.color !== undefined || list.color !== ""
                      ? { background: `#${list.color}` }
                      : { background: "#f97ab9" }
                  }
                  data-id={list.id}
                  onClick={(e) => {
                    openModal(e);
                  }}
                />
              </div>
              <div
                className={style.right}
                data-id={list.id}
                onClick={(e) => {
                  openModal(e);
                }}
              >
                <h2>{list.month}</h2>
                <small className={style.small}>{list.year}</small>
                <small className={style.small}>|</small>
                <small className={style.small}>{list.month_tasks.length}</small>
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
                  data-id={list.id}
                  className={style.li}
                  onClick={(e) => {
                    hideMore(e);
                    openAddMonth();
                    setMonthCardId(list.id);
                    setEditState(true);
                  }}
                >
                  Edit
                </li>
                <li
                  data-id={list.id}
                  className={style.li}
                  onClick={(e) => {
                    hideMore(e);
                    setMonthCardId(list.id);
                    setDeleteState(true);
                    setEditState(false);
                    deleteData(list.id);
                  }}
                >
                  Delete
                </li>
              </div>
            </motion.div>
          );
        })
      ) : (
        <div></div>
      )}
    </>
  );
}
