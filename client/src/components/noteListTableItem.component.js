const NoteListTableItem = (props) => {

  return (
    <tr>
      <th scope="row">{props.note._id}</th>
      <td>{props.note.title}</td>
      <td>{props.note.body}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => props.onEditClick(props.note._id)}>Edit</button></td>
      <td><button type="button" className="btn btn-danger" onClick={() => props.onDeleteClick(props.note._id)}>Delete</button></td>
    </tr>
  );
}

export default NoteListTableItem;