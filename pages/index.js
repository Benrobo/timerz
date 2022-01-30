import { Error, Header, Months } from "../components";
import NavBar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Header />
      <Error message="You have no collection" />
      <Months />
      <NavBar />
    </div>
  );
}
