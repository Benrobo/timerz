import { useContext } from "react";

import DataContext from "../../context/DataContext";

import style from "./style.module.css";

export default function Months({
  background = "#f97ab9",
  name = "January",
  year = "2022",
  tasks = "2",
}) {
  let { openModal } = useContext(DataContext);

  return (
    <div className={style.cards} onClick={openModal}>
      <div className={style.left}>
        <img
          src="/img/icons/shield.png"
          alt=""
          className={style.icon}
          style={
            background === undefined
              ? { background: background }
              : { background: "#f97ab9" }
          }
        />
      </div>
      <div className={style.right}>
        <h2>{name}</h2>
        <small className={style.small}>{year}</small>
        <small className={style.small}>|</small>
        <small className={style.small}>{tasks}</small>
      </div>
    </div>
  );
}
