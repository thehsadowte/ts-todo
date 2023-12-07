import React, { useState } from "react";
import AddTodoForm from "./Components/AddTodoForm";
import TodoItem from "./Components/TodoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = { id: Date.now(), text: text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
