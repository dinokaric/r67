import axios from 'axios';


const API_URL = "http://3.65.206.32:7314/api";
function NoteApiService() {
  this.getAllNotes = function () {
    return axios.get(`${API_URL}/note`);
  }

  this.deleteNoteById = function (id) {
    return axios.delete(`${API_URL}/note/${id}`);
  }

  this.getNoteById = function(id){
    return axios.get(`${API_URL}/note/${id}`);
  }

  this.updateNoteById = function(id, note){
    return axios.put(`${API_URL}/note/${id}`, note);
  }

  
  this.createNote = function(note){
    return axios.post(`${API_URL}/note/`, note);
  }
}

const noteApiService = new NoteApiService();

export default noteApiService;