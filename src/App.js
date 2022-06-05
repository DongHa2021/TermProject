import "./styles.css";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import SongList from "./icon";

import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginPage from "./Page/LoginPage";
import UserPage from "./Page/UserPage";
import CommunityPage from "./Page/CommunityPage";
import CommentPage from "./Page/CommentPage";

export default function App() {
  return (
    <div>
      <CommentPage />
      <LoginPage />
      <UserPage />
      <CommunityPage />
    </div>
  );
}
