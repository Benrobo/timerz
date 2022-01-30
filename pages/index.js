import { Error, Header, Modal, Months } from "../components";
import NavBar from "../components/Navbar/Navbar";

import { useContext } from "react";

import style from "../styles/home.module.css";

import DataContext from "../context/DataContext";

export default function Home() {
  let test = useContext(DataContext);

  return (
    <>
      <Modal>
        <h1>Welcome</h1>
      </Modal>
      <div>
        <Header />
        {/* <Error message="You have no collection" /> */}
        <div className={style.monthsCont}>
          <Months />
          <Months />
          <Months />
          <Months />
          <Months />
          <Months />
          <Months />
          <Months />
          <Months />
          <div className={style.space}></div>
        </div>
        <NavBar />
      </div>
    </>
  );
}
