import style from "./style.module.css";

export default function BackNav({ active = "January" }) {
  return (
    <>
      <div className={style.backnavCont}>
        <img src="img/icons/back.png" className={style.icon} />
        <h3>{active}</h3>
      </div>
    </>
  );
}
