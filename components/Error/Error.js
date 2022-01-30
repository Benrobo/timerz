import style from "./style.module.css";

export default function Error({ message = "Error container" }) {
  return (
    <div className={style.main}>
      <p>{message}</p>
    </div>
  );
}
