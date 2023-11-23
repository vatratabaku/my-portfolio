import Navbar from "./Navbar";

import "./css/homeLayout.css";
import Matrix from "./js/Matrix";
import Container from "./container/Container";
//{ background: "#2D2F35" }

function HomeLayout() {
  return (
    <div style={{ overflowY: "hidden", width: "100%" }} className="myDiv">
      <Navbar></Navbar>
      <Matrix></Matrix>
      <Container></Container>
    </div>
  );
}

export default HomeLayout;
