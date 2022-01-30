import { useContext } from "react";

import style from "./style.module.css";

import DataContext from "../../context/DataContext";

export default function BackNav({ active = "January" }) {
  let { closeModal } = useContext(DataContext);

  return (
    <>
      <div className={style.backnavCont}>
        <img
          src="img/icons/back.png"
          className={style.icon}
          onClick={closeModal}
        />
        <h3>{active}</h3>
      </div>
    </>
  );
}
