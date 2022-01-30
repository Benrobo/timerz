import logo from "../../public/img/logo.png";
import style from "./style.module.css";

export default function Header() {
  return (
    <>
      <div className={style.header}>
        <div className={style.flex}>
          <div className={style.left}>
            <h1>Welcome Back , ✌️ </h1>
            <h1>James</h1>
          </div>
          <div className={style.right}>
            <img src={"/img/logo.png"} className={style.logo} />
          </div>
        </div>
      </div>
    </>
  );
}
