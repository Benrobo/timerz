import style from "./style.module.css";
import { useContext } from "react";

import DataContext from "../../context/DataContext";

export default function Months({ data }) {
  let { openModal } = useContext(DataContext);

  console.log(data);

  return (
    <>
      {data !== undefined && data.length > 0 ? (
        data.map((list, i) => {
          return (
            <div
              className={style.cards}
              onClick={openModal}
              key={i}
              data-id={list.id}
            >
              {typeof window !== undefined && typeof document !== undefined && (
                <>
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
                    />
                  </div>
                  <div className={style.right}>
                    <h2>{list.month}</h2>
                    <small className={style.small}>{list.year}</small>
                    <small className={style.small}>|</small>
                    <small className={style.small}>
                      {list.month_tasks.length}
                    </small>
                  </div>
                </>
              )}
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </>
  );
}
