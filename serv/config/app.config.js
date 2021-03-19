import NoteController from '../controllers/note.controller.js';
import NoteService from "../services/note.service.js";
import InMemoryRepository from "../DAL/inmemory.repository.js";
import NotesRepository from '../DAL/notesRepository.js';

//const inMemoryRepository = new InMemoryRepository();
const notesRepository = new NotesRepository();

// const noteService = new NoteService({ repository: inMemoryRepository});
const noteService = new NoteService({ repository: notesRepository});
const noteController = new NoteController({ noteService: noteService});

export default {
  repositories: {
    inMemoryRepository
  },
  services: {
    noteService
  },
  controllers: {
    noteController
  }
}