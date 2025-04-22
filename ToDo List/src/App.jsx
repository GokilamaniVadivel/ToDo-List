import React, { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a Todo App" },
    { id: 3, text: "Write Unit Tests" },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Date.now(),
      text: event.target.elements.todo.value,
    };
    if (newTodo.text.trim()) {
      setTodos([...todos, newTodo]);
    }
    event.target.reset();
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <SubmitForm onSubmit={handleSubmit} />
      <TodoList todos={todos} onDelete={handleDelete} />
    </div>
  );
};

const SubmitForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="todo" placeholder="Add a new task" />
    <button type="submit">Add</button>
  </form>
);

const TodoList = ({ todos, onDelete }) => (
  <ul>
    {todos.map((todo) => (
      <Todo key={todo.id} todo={todo} onDelete={onDelete} />
    ))}
  </ul>
);

const Todo = ({ todo, onDelete }) => (
  <li>
    {todo.text}
    <button onClick={() => onDelete(todo.id)}>X</button>
  </li>
);

export default TodoApp;