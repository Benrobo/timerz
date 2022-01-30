import style from "./style.module.css";

export default function Layout({ children }) {
  return <main className={style.layout}>{children}</main>;
}
