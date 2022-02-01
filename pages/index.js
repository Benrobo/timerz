import { useContext, useEffect, useState } from "react";
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
  const [storedData, setStoredData] = useState(null);

  useEffect(() => {
    setStoredData(util.getData());
    return () => {};
  }, [setStoredData]);

  return (
    <>
      <div>
        <Header />
        {util.getData() !== undefined && util.getData().length === 0 ? (
          <Error message="You have no collection" />
        ) : (
          <div className={style.monthsCont}>
            <Months data={storedData} />
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
