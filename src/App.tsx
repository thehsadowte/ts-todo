import React, { useState } from "react";
import AddTodoForm from "./Components/AddTodoForm";
import TodoItem from "./Components/TodoItem";
import "./App.css";

interface Task {
  id: number;
  text: string;
}

function App() {
  const [todos, setTodos] = useState<Task[]>([]);

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text: text };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
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
