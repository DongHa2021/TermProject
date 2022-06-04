import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SongList = () => {
  const addSong = (e) => {
    e.preventDefault();
    console.log("노래 추가");
  };

  return (
    <>
      <Box component="form" onSubmit={addSong} sx={{ mt: 3 }}>
        <TextField
          required
          autoFocus
          fullWidth
          id="songInput"
          label="노래 제목"
          name="songInput"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 3 }}
        >
          노래 추가
        </Button>
      </Box>
    </>
  );
};

export default SongList;
