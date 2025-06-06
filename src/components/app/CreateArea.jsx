import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useReducer,
} from "react";

import { dataContext } from "../App";

import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea() {
  const { addNote, update, deleteNote, setUpdate } = useContext(dataContext);

  const [isExpanded, setExpanded] = useState(false);
  const initialNote = { title: "", content: "" };
  function noteReducer(state, action) {
    switch (action.type) {
      case "handleChange": {
        const { name, value } = action.payload;
        return { ...state, [name]: value };
      }

      case "submitNote": {
        if (update.id > -1) {
          deleteNote(update.id);
          addNote(state);
          setUpdate({ id: null, title: "", content: "" });
          return { title: "", content: "" };
        } else if (state.content != "") {
          addNote(state);
          return { title: "", content: "" };
        }
        setExpanded(false);
      }

      case "handleUpdate": {
        return { title: update.title, content: update.content };
      }

      default: {
        break;
      }
    }
  }

  const [noteState, dispatchNote] = useReducer(noteReducer, initialNote);
  const { title, content } = noteState;

  let renders = useRef(0);

  useEffect(() => {
    renders.current++;
    console.log("CreateArea: " + renders.current);
  }, [noteState]);

  let highlightTextArea = useRef();

  useEffect(() => {
    highlightTextArea.current.focus();
    dispatchNote({ type: "handleUpdate" });
  }, [update]);

  function handleClick() {
    setExpanded(true);
  }

  return (
    <div className="container col-sm col-lg-6">
      <form
        className="create-note"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        {isExpanded && (
          <input
            name="title"
            onChange={(event) => {
              dispatchNote({ type: "handleChange", payload: event.target });
            }}
            value={title}
            placeholder="Title"
          />
        )}

        <textarea
          ref={highlightTextArea}
          name="content"
          onClick={handleClick}
          onChange={(event) => {
            dispatchNote({ type: "handleChange", payload: event.target });
          }}
          value={content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />

        <Zoom in={isExpanded ? true : false}>
          <Fab
            color="info"
            onClick={() => {
              dispatchNote({ type: "submitNote" });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
