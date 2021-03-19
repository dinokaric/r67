import express from 'express';

function noteRoute(noteController){

  const router = express.Router();

  router.post('/note', noteController.createNote);
  router.get('/note', noteController.getAllNotes);
  router.get('/note/:id', noteController.getNoteById);
  router.put('/note/:id', noteController.updateNoteById);
  router.delete('/note/:id', noteController.deleteNoteById);

  return router;
}

export default noteRoute;