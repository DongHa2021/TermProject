import "./styles.css";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import SongList from "./icon";
import SingIn from "./SignIn";
import Egg01 from "./img/Egg01.png";
import Egg02 from "./img/Egg02.png";
import Egg03 from "./img/Egg03.png";

const TEST = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

const Main = () => {
  return (
    <div style={{ display: "flex" }}>
      <img className="min" src={Egg01} alt="big brother" />
      <SingIn />
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Term Project 20180134 김동하</h1>
      <h2>알차게 살자 !</h2>
      <Main />
    </div>
  );
}
