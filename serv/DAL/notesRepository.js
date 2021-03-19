import mongoose from 'mongoose';
import dontenv from 'dotenv';
dontenv.config()
const {DB_CONNECTIONSTRING} = process.env;

mongoose.connect(DB_CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true});

const noteSchema = new mongoose.Schema({
  title: String,
  body: String
});

const Note = mongoose.model('Note', noteSchema);

// const newNote = new Note({ title: 'banan', body: 'hejsan'});

// newNote.save();

function NotesRepository(initNotes) {
  const notes = initNotes || [];

  this.create = async (note) => {
    let newNote = new Note(note);
    newNote.isNew = true;
    let result = await newNote.save();
    
    return await result;
  }

  this.getAll = async() => {
    return await Note.find({});
  }

  this.getById = async(id) => {
    return await Note.findById(id);
  }

  this.updateById = async(id, note) => {
    
    return await Note.updateOne({_id: id}, note);
  }

  this.deleteById = async(id) => {
    return await Note.deleteOne({ _id: id});
  }
}

export default NotesRepository;