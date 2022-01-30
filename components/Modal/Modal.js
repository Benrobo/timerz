import style from "./style.module.css";

export default function Modal({ children }) {
  return (
    <div className={style.modalCont} data-modal-cont>
      {children}
    </div>
  );
}
