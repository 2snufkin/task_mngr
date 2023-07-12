import './App.css';
import {NavBar} from "./components/NavBar";
import {AddTask} from "./components/AddTask";
import {TaskList} from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
