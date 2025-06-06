import React, { useState, createContext, useRef, useReducer } from "react";

import Header from "./app/Header";
import Note from "./app/Note";
import CreateArea from "./app/CreateArea";
import { useEffect } from "react";

export const dataContext = createContext();

function App() {
  const [theme, setTheme] = useState(false);
  const [update, setUpdate] = useState({ id: null, title: "", content: "" });

  const initialAllNotes = [];
  function allNotesReducer(state, action) {
    switch (action.type) {
      case "addNote": {
        return [...state, action.newNote];
      }

      case "deleteNote": {
        const noteIndex = action.noteIndex;
        const notes = state.filter((noteItem, index) => {
          return index !== noteIndex;
        });
        return notes;
      }

      default: {
        break;
      }
    }
  }

  const [allNotes, dispatchAllNotes] = useReducer(
    allNotesReducer,
    initialAllNotes
  );

  const data = "blackbox";

  let renders = useRef(0);

  useEffect(() => {
    renders.current++;
    console.log("App: " + renders.current);
  }, [allNotes]);

  function themeMode() {
    setTheme(!theme);
  }

  function addNote(newNote) {
    dispatchAllNotes({ type: "addNote", newNote: newNote });
  }

  function deleteNote(noteIndex) {
    dispatchAllNotes({ type: "deleteNote", noteIndex: noteIndex });
  }

  function editId(id, title, content) {
    setUpdate({ id: id, title: title, content: content });
  }

  return (
    <>
      <div className="app" data-bs-theme={theme ? "dark" : "light"}>
        <dataContext.Provider
          value={{ addNote, deleteNote, data, editId, update, setUpdate }}
        >
          <Header />
          <button onClick={themeMode}>mode</button>
          <div className="container">
            <CreateArea />
            {/* uses addNote */}
            {allNotes.map((noteItem, index) => {
              return (
                <Note
                  key={index}
                  id={index}
                  title={noteItem.title}
                  content={noteItem.content}
                  // uses deleteNote
                />
              );
            })}
          </div>
        </dataContext.Provider>
      </div>
    </>
  );
}

export default App;
