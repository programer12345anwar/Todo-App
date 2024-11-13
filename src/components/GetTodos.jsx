import PropTypes from "prop-types";

const GetTodos = ({ todos, setTodos }) => {
  const deleteTodo = (item) => {
    const deletedTodos = todos.filter((todo) => todo.name !== item.name);
    setTodos(deletedTodos);
    localStorage.setItem("todoList", JSON.stringify(deletedTodos)); // Update localStorage after deletion
  };

  return (
    <div className="flex flex-col gap-4">
      {todos.map((task, index) => (
        <div
          key={index}
          className="bg-gray-300 rounded-md px-3 py-2 text-gray-800 font-bold flex justify-between items-center"
        >
          <h1 className="text-xl">{task.name}</h1>
          <button
            onClick={() => deleteTodo(task)}
            className="bg-red-600 text-white px-5 py-2 rounded ml-auto"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

// PropTypes validation
GetTodos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired, // Ensure `todos` is an array of objects with a required `name` field
  setTodos: PropTypes.func.isRequired, // Ensure `setTodos` is a function
};

export default GetTodos;
