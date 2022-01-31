import { useContext } from "react";
import DataContext from "../../context/DataContext";

import style from "./style.module.css";

export default function NavBar({ active }) {
  let { openAddMonth, openAddDays } = useContext(DataContext);

  return (
    <div className={style.navbar}>
      <img
        src="/img/icons/plus.png"
        className={style.icon}
        onClick={() => {
          if (active === "months") {
            return openAddMonth();
          } else if (active === "days") {
            openAddDays();
          }
        }}
      />
    </div>
  );
}
