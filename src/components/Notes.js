import { useEffect, useState } from "react";
import { Note } from "./Note";
import { CreateNote } from "./CreateNote";
import { getAllNotes } from "./../services/notes/getAllNotes";
import { postNote } from "./../services/notes/postNote";

export const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    getAllNotes().then((response) => setNotes(response));
  }, []);

  const addNewNote = (event) => {
    event.preventDefault();
    const noteToAdd = {
      content: newNote,
    };
    postNote(noteToAdd).then((response) =>
      setNotes((prevNotes) => [...prevNotes, response])
    );
    setNewNote("");
  };

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <>
      <button onClick={() => setShowAll(!showAll)}>
        Show {showAll ? "important" : "all"}
      </button>
      <CreateNote
        buttonText="Create"
        handleSubmit={addNewNote}
        handleChange={handleChange}
        value={newNote}
      />
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} content={note} />
        ))}
      </ul>
    </>
  );
};
