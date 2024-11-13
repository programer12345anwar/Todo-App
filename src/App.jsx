import { useEffect, useState } from "react";
import "./App.css";
import AddToDo from "./components/AddToDo";
import GetTodos from "./components/GetTodos";

function App() {
  const [todos, setTodos] = useState([]); //for storing data in local storage

  const fetchAllTodos = () => {
    const todoList = localStorage.getItem("todoList"); //giving keys to local st. for storing
    //todoList will be in the form json so need to convert it into object for storing
    return todoList ? JSON.parse(todoList) : [];
  };
  useEffect(() => {
    const alltodos = fetchAllTodos();
    setTodos(alltodos);
  }, []); //dependency array empty

  return (
    <div className="w-[60%] mx-auto my-8">
      <h1 className="text-3xl font-bold text-center">To Do Application</h1>
      <AddToDo todos={todos} setTodos={setTodos} />
      <GetTodos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
