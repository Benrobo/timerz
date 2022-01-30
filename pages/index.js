import { Error, Header, Months } from "../components";
import NavBar from "../components/Navbar/Navbar";

import style from "../styles/home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      {/* <Error message="You have no collection" /> */}
      <div className={style.monthsCont}>
        <Months />
        <Months />
        <Months />
        <Months />
      </div>
      <NavBar />
    </div>
  );
}
