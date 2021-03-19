function NoteController(options) {
  const { noteService } = options;

  this.createNote = async (req, res, next) => {
    try {
      res.status(200).json(await noteService.createNote(req.body));
    } catch (e) {
      next(e);
    }
  };

  this.getAllNotes = async (req, res, next) => {
    try {
      const result = await noteService.getAllNotes();
      res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  };

  this.getNoteById = async (req, res, next) => {
    try {
      const result = await noteService.getNoteById(req.params.id);
      res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  };

  this.updateNoteById = async (req, res, next) => {
    try {
      delete req.body._id;
      const result = await noteService.updateNoteById(req.params.id, req.body);
      res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  };

  this.deleteNoteById = async (req, res, next) => {
    try {
      const result = await noteService.deleteNoteById(req.params.id);
      res.status(200).json(result);
    } catch (e){
      next(e);
    }
  }
}

export default NoteController;
