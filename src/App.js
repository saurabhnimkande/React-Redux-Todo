import { Route, Routes } from "react-router-dom";
import "./App.css";
import { EditTodo } from "./components/EditTodo";
import { Todo } from "./components/Todo";
import { TodoDetails } from "./components/TodoDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/todo/:id" element={<TodoDetails />}></Route>
        <Route path="/todo/:id/edit" element={<EditTodo />}></Route>
        <Route path="*" element={<div>404 Page Not Found</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
