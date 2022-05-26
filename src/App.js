import "./styles.css";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function App() {
  return (
    <div className="App">
      <h1>Term Project</h1>
      <h2>20180134 김동하</h2>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
      ;
    </div>
  );
}
