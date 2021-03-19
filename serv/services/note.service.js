function NoteService(options) {
  const { repository } = options;

  this.createNote = async (note) => {
    return await repository.create(note);
  };

  this.getAllNotes = async (note) => {
    return await repository.getAll();
  };

  this.getNoteById = async (id) => {
    return await repository.getById(id);
  };

  this.updateNoteById = async (id, note) => {
    return await repository.updateById(id, note);
  };

  this.deleteNoteById = async (id) => {
    return await repository.deleteById(id);
  }
}

export default NoteService;
