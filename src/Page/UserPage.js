import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import React, { useState, useRef, useEffect } from "react";
import "react-edit-text/dist/index.css";

const padNumber = (num, length) => {
  return String(num).padStart(length, "0");
};

const UserPage = () => {
  let now = new Date();
  const [hour, setHour] = useState(padNumber(now.getHours(), 2));
  const [min, setMin] = useState(padNumber(now.getMinutes(), 2));
  const [sec, setSec] = useState(padNumber(now.getSeconds(), 2));
  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      now = new Date();
      setHour(padNumber(now.getHours(), 2));
      setMin(padNumber(now.getMinutes(), 2));
      setSec(padNumber(now.getSeconds(), 2));
    }, 1000);
    // clean-up 함수 리턴!
    return () => clearInterval(interval.current);
  }, []);

  return (
    <div className="App">
      <h2>공부시간 </h2>
      <h1>
        !! {hour} : {min} : {sec} !!{" "}
      </h1>
      <br />
      <Button variant="contained" color="success">
        START
      </Button>
      <br />
      <br />
      <Button variant="outlined" color="error">
        STOP
      </Button>
      <br />
      <br />
      <input type="text" placeholder="오늘할일 1" />{" "}
      <Button variant="contained">입력</Button>
      <br /> <br />
      <input type="text" placeholder="오늘할일 2" />{" "}
      <Button variant="contained">입력</Button>
      <br /> <br />
      <input type="text" placeholder="오늘할일 3" />{" "}
      <Button variant="contained">입력</Button>
      <br />
      <br />
      <input type="text" placeholder="오늘할일 4" />{" "}
      <Button variant="contained">입력</Button>
      <br />
      <br />
      <input type="text" placeholder="오늘할일 5" />{" "}
      <Button variant="contained">입력</Button>
    </div>
  );
};

export default UserPage;
