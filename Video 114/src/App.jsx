import { useState } from "react";
import Navbar from "./component/Navbar";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([])

  const handleEdit=()=>{

  }

  const handleDelete=()=>{

  }

  const handleAdd()=>{

  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-indigo-100 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input type="text" className="w-1/2" />
          <button onClick={handleAdd}  className="bg-indigo-800 hover:bg-indigo-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6 ">
            Add
          </button>
        </div>
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          <div className="todo flex">
            <div className="text">{todo}</div>
            <div className="buttons">
              <button onClick={handleEdit} className="bg-indigo-800 hover:bg-indigo-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1 ">
                Edit
              </button>
              <button onClick={handleDelete} className="bg-indigo-800 hover:bg-indigo-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1 ">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
