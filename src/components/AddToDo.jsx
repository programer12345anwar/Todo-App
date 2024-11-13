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

    const todosForAdding = [...todos, data];
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
    <div className="flex flex-row justify-center items-center my-4 gap-2">
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


// Before adding button enter function
// import { useState } from "react";
// import PropTypes from "prop-types";

// const AddToDo = ({ todos, setTodos }) => {
//   const [task, setTask] = useState("");

//   const addToDo = () => {
//     if(!task||task===""){
//       return;
//     }
//     const data = {
//       name: task, // 'name' is the key
//     };

//     const todosForAdding = [...todos, data];
//     localStorage.setItem("todoList", JSON.stringify(todosForAdding));
//     setTodos(todosForAdding);

//     setTask(""); // Reset input field after adding the task
//   };

//   return (
//     <div className="flex flex-row justify-center items-center my-4 gap-2">
//       <input
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         type="text"
//         placeholder="Your task..."
//         className="w-[400px] rounded-md px-2 py-2 text-black border-none"
//       />
//       <button
//         onClick={addToDo}
//         className="bg-blue-600 text-white rounded-md px-4 py-2"
//       >
//         Add Task
//       </button>
//     </div>
//   );
// };

// // PropTypes validation
// AddToDo.propTypes = {
//   todos: PropTypes.array.isRequired, // todos should be an array
//   setTodos: PropTypes.func.isRequired, // setTodos should be a function
// };

// export default AddToDo;
// i want that after giving prps value when i am pressing enter button it shou;d be shaved in totolist task

