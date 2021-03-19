import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import noteApiService from "./../services/note.api.service.js";
import NoteListTableItem from "./noteListTableItem.component.js";

function NoteListTable() {
  const [noteList, setNoteList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    //hämta data från api
    noteApiService.getAllNotes().then((e) => {
      setNoteList(e.data);
    });
  }, []);

  const onDeleteListItem = (id) => {
    console.log("delete item " + id);
    // setNoteList(noteList.filter((e) => e._id != id));

    noteApiService.deleteNoteById(id).then((e) => {
      setNoteList(noteList.filter((e) => e._id !== id));
      alert("deleted");
    });
  };

  const onEditListItem = (id) => {
    history.push(`/edit/${id}`);
  };

  const renderListItems = () => {
    return noteList.map((e) => (
      <NoteListTableItem
        key={e._id}
        note={e}
        onDeleteClick={onDeleteListItem}
        onEditClick={onEditListItem}
      ></NoteListTableItem>
    ));
  };

  return (
    <div>
      <h1>All notes...</h1>
      <button type="button" className="btn btn-primary" onClick={() => history.push("/new")}>Create new note</button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{renderListItems()}</tbody>
      </table>
    </div>
  );
}

export default NoteListTable;
