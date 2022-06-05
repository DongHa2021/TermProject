import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import SingIn from "/src/SignIn";
import Egg01 from "/src/img/Egg01.png";
import Egg02 from "/src/img/Egg02.png";
import Egg03 from "/src/img/Egg03.png";

const Main = () => {
  return (
    <div style={{ display: "flex" }}>
      <img className="min" src={Egg01} alt="big brother" />
      <SingIn />
    </div>
  );
};

const LoginPage = () => {
  return (
    <div className="App">
      <h1>Term Project 20180134 김동하</h1>
      <h2>알차게 살자 !</h2>
      <Main />
    </div>
  );
};

export default LoginPage;
