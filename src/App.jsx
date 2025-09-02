import React from "react";
import TodoApp from "./components/TodoApp";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <TodoApp />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;