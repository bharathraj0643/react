import React, { useContext, useRef, useEffect } from "react";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import { dataContext } from "../App";

function Note(props) {
  const { deleteNote, editId } = useContext(dataContext);

  function handleDelete() {
    // props.onDelete(props.id);
    deleteNote(props.id); // useContext
  }

  function handleEdit() {
    editId(props.id, props.title, props.content);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>
        <DeleteTwoToneIcon />
      </button>
      <button onClick={handleEdit}>
        <EditOutlinedIcon />
      </button>
    </div>
  );
}

export default Note;
