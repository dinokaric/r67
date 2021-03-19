import { BrowserRouter, Route, Switch} from "react-router-dom";

import NoteListTable from "./components/noteListTable.component.js";
import NoteEditForm from './components/noteEditForm.component.js';
import NoteNewForm from "./components/noteNewForm.component.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/edit/:id" component={NoteEditForm}></Route>
        <Route path="/new" component={NoteNewForm}></Route>
        <Route component={NoteListTable}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
