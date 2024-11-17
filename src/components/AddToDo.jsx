import { useState } from "react";
import PropTypes from "prop-types";

const AddToDo = ({ todos, setTodos }) => {
  const [task, setTask] = useState("");

  const addToDo = () => {
    if (!task || task === "") {
      return;
    }
    const data = {
      name: task, // 'name' is the key
    };

    const todosForAdding = [...todos, data]; //Array of objects

    localStorage.setItem("todoList", JSON.stringify(todosForAdding));
    setTodos(todosForAdding);

    setTask(""); // Reset input field after adding the task
  };

  // Function to handle key press (Enter key)
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addToDo(); // Trigger the addToDo function when Enter is pressed
    }
  };

  return (
    <div className="flex flex-row justify-center items-center my-4 gap-1.5 w-full ">
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyPress} // Listen for key down event
        type="text"
        placeholder="Your task..."
        className="w-[400px] rounded-md px-2 py-2 text-black border-none"
      />
      <button
        onClick={addToDo}
        className="bg-blue-600 text-white rounded-md px-4 py-2"
      >
        Add Task
      </button>
    </div>
  );
};

// PropTypes validation
AddToDo.propTypes = {
  todos: PropTypes.array.isRequired, // todos should be an array
  setTodos: PropTypes.func.isRequired, // setTodos should be a function
};

export default AddToDo;

/* 
1. 
const todosForAdding = [...todos, data];
Purpose: This creates a new array called todosForAdding by adding the new data (the task object) to the existing todos array.
How it works:
...todos: The spread operator (...) is used to copy all elements of the existing todos array into a new array.
data: This represents the new task object (e.g., { name: "New Task" }) that you want to add.
Result: A new array containing all previous tasks plus the new one at the end.
Example:
javascript
Copy code
const todos = [{ name: "Task 1" }, { name: "Task 2" }];
const data = { name: "Task 3" };

const todosForAdding = [...todos, data];
console.log(todosForAdding);
// Output: [{ name: "Task 1" }, { name: "Task 2" }, { name: "Task 3" }]

2.
localStorage.setItem("todoList", JSON.stringify(todosForAdding));
Purpose: Saves the updated list of tasks (todosForAdding) to the browser's localStorage.
How it works:
JSON.stringify(todosForAdding): Converts the todosForAdding array (a JavaScript object) into a JSON string, because localStorage can only store strings.
localStorage.setItem("todoList", ...): Stores the stringified array under the key "todoList". This allows the data to persist even after the page is refreshed.
Example:
javascript
Copy code
// Assume todosForAdding is [{ name: "Task 1" }, { name: "Task 2" }]
localStorage.setItem("todoList", JSON.stringify(todosForAdding));

// In localStorage:
// Key: "todoList"
// Value: '[{"name":"Task 1"},{"name":"Task 2"}]'

3. 
setTodos(todosForAdding);
Purpose: Updates the state variable todos with the new list of tasks (todosForAdding).


How it works:
setTodos: This is a state updater function provided by React's useState hook. Calling this function updates the state of todos to the new array (todosForAdding).
Why this is important: React re-renders the component whenever the state changes. This ensures that the new task is immediately displayed in the UI.
Flow of the Code:
The new task (data) is added to the current list (todos) using the spread operator.
The updated list is saved in the browser's localStorage for persistence.
The state (todos) is updated, triggering a UI re-render to show the updated to-do list.


Key Points to Remember:
Spread Operator (...): Used to copy the existing array and append the new task.
localStorage:
Used for persistence (data stays available even after refreshing the browser).
Requires data to be converted to a string using JSON.stringify.
React State (setTodos): Triggers a re-render of the component to reflect the updated task list in the UI.

*/
