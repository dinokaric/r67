function InMemoryRepository() {
  const notes = [];

  this.create = async (note) => {
    note._id = notes.length;
    notes.push(note);
    return note;
  }

  this.getAll = async() => {
    return notes;
  }

  this.getById = async(id) => {
    return notes[id];
  }

  this.updateById = async(id, note) => {
    return notes[id] = note;
  }

  this.deleteById = async(id) => {
    notes = notes.map(e._id !== id);
  }
}

export default InMemoryRepository;