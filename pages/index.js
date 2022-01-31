import { useContext } from "react";
import {
  AddMonths,
  BackNav,
  Days,
  Error,
  Header,
  Modal,
  Months,
} from "../components";
import NavBar from "../components/Navbar/Navbar";

import style from "../styles/home.module.css";

import DataContext from "../context/DataContext";

export default function Home() {
  let { monthVisible, util } = useContext(DataContext);

  return (
    <>
      <div>
        <Header />
        {util.getData() !== undefined && util.getData().length === 0 ? (
          <Error message="You have no collection" />
        ) : (
          <div className={style.monthsCont}>
            <Months data={util.getData()} />
            <div className={style.space}></div>
          </div>
        )}
        <NavBar active="months" />

        <Modal>
          <BackNav active="February" />
          <br />
          <Days />
          <NavBar active="days" />
        </Modal>

        {/* add form container */}
        {monthVisible && <AddMonths />}
      </div>
    </>
  );
}
