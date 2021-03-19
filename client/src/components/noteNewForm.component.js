


import { useHistory } from "react-router";
import { useState } from "react";
import noteApiService from "./../services/note.api.service.js";

function NoteNewForm() {
  const [note, setNote] = useState({});
  const history = useHistory();

  const onTitleInputChange = (e) => {
    setNote({ ...note, title: e.target.value });
  };

  const onBodyInputChange = (e) => {
    setNote({ ...note, body: e.target.value });
  };

  const onSaveButtonClick = () => {
    noteApiService.createNote(note).then((e) => {
      alert("Saved");
      history.push("/");
    });
  };

  const onDiscardButtonClick = () => {
    history.push("/");
  };

  return (
    <>
      <form>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" value={note.title || ""} onChange={onTitleInputChange}></input>
        </div>
        <div className="form-group">
          <label>Body</label>
          <textarea className="form-control" rows="3" value={note.body || ""} onChange={onBodyInputChange}></textarea>
        </div>
        <div className="form-group">
          <button type="button" className="btn btn-primary" onClick={onSaveButtonClick}>Save</button>
          <button type="button" className="btn btn-secondary" onClick={onDiscardButtonClick}>Discard</button>
        </div>
      </form>
    </>
  );
}

export default NoteNewForm;
