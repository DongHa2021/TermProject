import React, { useState } from "react";

const List = () => {
  const [songs, addSong] = useState([]);

  return (
    <>
      ID : 123 님 게시물
      <br />
      <input type="text" id="songNameInput" />
      <input
        type="button"
        value="댓글 입력"
        onClick={() => addSong([...songs, "안녕하세"])}
      />
      <ul>
        {" "}
        {songs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
