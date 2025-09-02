import React, { useState } from "react";
import { toast } from "react-toastify";
import "./TodoApp.css";

function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addOrUpdateTodo = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      toast.error("Todo cannot be empty!");
      return;
    }

    if (editIndex !== null) {
      const newList = [...todoList];
      newList[editIndex] = input;
      setTodoList(newList);
      setEditIndex(null);
      toast.info("Updated!");
    } else {
      setTodoList([...todoList, input]);
      toast.success("Added!");
    }

    setInput("");
  };

  const deleteTodo = (i) => {
    const newList = todoList.filter((_, index) => index !== i);
    setTodoList(newList);
    toast.warn("Deleted");
  };

  const startEditing = (i) => {
    setInput(todoList[i]);
    setEditIndex(i);
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">My Todos</h2>

      <form className="todo-form" onSubmit={addOrUpdateTodo}>
        <input
          className="todo-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter something..."
        />
        <button className="todo-btn" type="submit">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      <ul className="todo-list">
        {todoList.map((t, i) => (
          <li key={i} className="todo-item">
            <span>{t}</span>
            <div className="todo-actions">
              <button className="edit-btn" onClick={() => startEditing(i)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => deleteTodo(i)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;