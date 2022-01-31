import style from "./style.module.css";

export default function Layout({ children }) {
  return (
    <main className={style.layout}>
      {/* preventing SSR (Server Side Rendering) 
        Without this, some of styles wont get loaded due to data SSR
        With Next.js you can check if we're on the server by checking if the window object is undefined.
      */}
      {typeof window === "undefined" ? null : children}
    </main>
  );
}
