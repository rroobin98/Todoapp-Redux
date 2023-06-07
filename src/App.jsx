import { useState } from "react";
import "./App.css";
import Button from "./Button";
import { useTodos, addTodo, removeTodo } from "./redux/todo";

let count = 1;

function App() {
  const [text, setText] = useState("");
  const { todoList } = useTodos();

  function handleChange(e) {
    setText(e.target.value);
  }

  const todo = {
    title: text,
    done: false,
    id: count++,
  };

  function handleAdd() {
    addTodo(todo);
  }

  function handleDelete(id) {
    return removeTodo(id);
  }

  return (
    <div className=" flex justify-center pt-10 ">
      <div className="bg-slate-100 w-fit p-10 pb-20 border shadow-lg rounded-xl ">
        <p className="font-mono pb-10 text-lg text-cyan-600">Things to do</p>
        <input
          type="text"
          onChange={handleChange}
          className="border-2 border-gray-400 text-black"
        />
        <Button
          title="Add Todo"
          onClick={handleAdd}
          color="primary"
          size="small"
        />
        {todoList.map((todo) => {
          return (
            <div className="p-2 font-mono text-black">
              {todo.title}
              <Button
                title={"Done"}
                onClick={() => handleDelete(todo.id)}
                color="green"
                size="small"
                key={todo.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;