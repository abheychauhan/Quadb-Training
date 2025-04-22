import { useState } from "react";

const App = () => {
 const [taskInput, settaskInput] = useState('');
 const [tasks, settasks] = useState([]);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.length == 0) return alert("Please add a task");
    settasks([...tasks, taskInput]);
    settaskInput('');
    console.log(tasks);

  }
const handleDelete = (index) => {
  console.log('index',index);
  settasks(tasks.filter((task, i) => i !== index));
  console.log( 'new',tasks);
  }

  return (
   <div className=" w-full h-screen pt-10 bg-gray-200 p-4 rounded-lg shadow-md">
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">To-do list</h1>
      <p className="text-gray-600 mb-4">Add your tasks below:</p>
      <p className="text-gray-600 mb-4">You have {tasks.length} tasks</p>

      <form
        className="flex items-center mb-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 mr-2 w-full"
          placeholder="Add a new task"
          value={taskInput}
          onChange={(e) => settaskInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg px-4 py-2"
        >
          Add
        </button>
      </form>
      <ul className="list-disc pl-5">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span className="text-gray-800">{task}</span>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 text-white rounded-lg px-2 py-1"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      
    </div>
   </div>
  );
};

export default App;
