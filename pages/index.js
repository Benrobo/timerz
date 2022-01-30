import { BackNav, Days, Error, Header, Modal, Months } from "../components";
import NavBar from "../components/Navbar/Navbar";

import { useContext } from "react";

import style from "../styles/home.module.css";

import DataContext from "../context/DataContext";

export default function Home() {
  let test = useContext(DataContext);

  return (
    <>
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

        {/* Modal Page */}
        <Modal>
          <BackNav active="February" />
          <br />
          <Days />
          <br />

          <NavBar />
        </Modal>
      </div>
    </>
  );
}
