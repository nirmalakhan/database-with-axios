// import { useState, useEffect } from "react";
// import axios from "axios";

// const App = () => {
//   const [notes, setNotes] = useState([]);
//   const [newNote, setNewNote] = useState("");
//   // const [showAll, setShowAll] = useState(true);

//   useEffect(() => {
//     axios.get("http://localhost:3001/notes").then((response) => {
//       setNewNote(response.data);
//     });
//   }, []);

//   const addNote = (event) => {
//     event.preventDefault();
//     const noteObject = {
//       content: newNote,
//       date: new Date(),
//       important: false,
//     };

//     axios.post("http://localhost:3001/notes", noteObject).then((response) => {
//       setNotes(notes.concat(response.data));
//       setNewNote("");
//     });

//   };

//   const handleNoteChange = (event) => {
//     setNewNote(event.target.value);
//   };

//   return (
//     <>
//       <input onChange={handleNoteChange} />
//       <button onClick={addNote}>submit</button>
//     </>
//   );
// };

// export default App;

// import axios from "axios";
// import React from "react";

// const baseURL = "http://localhost:3001/notes";

// export default function App() {
//   const [notes, setNotes] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/4`).then((response) => {
//       setNotes(response.data);
//     });
//   }, []);

//   function deleteNotes() {
//     axios.delete(`${baseURL}/4`).then(() => {
//       alert("Notes deleted!");
//       setNotes(null);
//     });
//   }

//   if (!notes) return "No post!";

//   return (
//     <div>
//       <h1>{notes.id}</h1>
//       <p>{notes.content}</p>
//       <button onClick={deleteNotes}>Delete Notes</button>
//     </div>
//   );
// }

// import React from "react";
// import axios from "axios";

// const baseURL = "http://localhost:3001/notes";

// export default function App() {
//   const [notes, setNotes] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/3`).then((response) => {
//       setNotes(response.data);
//     });
//   }, []);

//   function deleteNotes() {
//     axios.delete(`${baseURL}/3`).then(() => {
//       alert("Notes deleted");
//       setNotes(null);
//     });
//   }

//   if (!notes) return "No Notes";

//   return (
//     <>
//       <p>{notes.id}</p>
//       <p>{notes.content}</p>
//       <button onClick={deleteNotes}>Delete</button>
//     </>
//   );
// }

import React from "react";
import axios from "axios";

export default function App() {
  const [notes, setNotes] = React.useState([]);
  const [newNote, setNewNote] = React.useState("");
  

  React.useEffect(() => {
    axios.get(`http://localhost:3001/notes`).then((response) => {
      setNotes(response.data);
    });
  }, []);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: false,
    };

    axios.post("http://localhost:3001/notes", noteObject).then((response) => {
      setNotes(notes.concat(response.data));
      setNewNote("");
    });
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  function updateNotes(id) {
    const updateData = {
      date: new Date(),
      content: "Hello",
    };

    axios
      .put(`http://localhost:3001/notes/${id}`, updateData)
      .then((response) => {
        setNotes(response.data);
      });
  }

  function deleteNotes(id) {
    const deleteData = {
      id: "",
      content: "",
    };
    axios.delete(`http://localhost:3001/notes/${id}`).then(() => {
      setNotes("");
    });
  }

  return (
    <>
      <input onChange={handleNoteChange} />
      <button onClick={addNote}>submit</button>
      {notes.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.content}</h1>
            <input onChange={handleNoteChange} />
            <button onClick={() => updateNotes(item.id)}>Update</button>
            <button onClick={() => deleteNotes(item.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}
