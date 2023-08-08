import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlusCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [inputValue, setInputValue] = useState("");
  const [showDoneMessage, setShowDoneMessage] = useState(false);

  const handleAdd = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, itemIndex) => itemIndex !== index));
  };

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleTickClick = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos[index] = `✅ ${updatedTodos[index]}`;
      return updatedTodos;
    });

    setShowDoneMessage(true);

    setTimeout(() => {
      setShowDoneMessage(false);
    }, 1500);
  };

  return (
    <div className="app">
      <div className="header">
        <h2 className="title">To-Do List</h2>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
          />
          <FontAwesomeIcon
            icon={faPlusCircle}
            onClick={handleAdd}
            className="add-icon"
          />
        </div>
      </div>
      <div className="todos">
        {todos.map((todo, index) => (
          <div key={index} className="todo">
            <h3>{todo}</h3>
            <div className="todo-icons">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="tick-icon"
                onClick={() => handleTickClick(index)}
              />
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => handleDelete(index)}
                className="delete-icon"
              />
            </div>
          </div>
        ))}
      </div>
      <div className={`done-message ${showDoneMessage ? "active" : ""}`}>
      Hurrrrraaaaayyyyyyyyy 🎉🥳 Task Done! 🎉🥳👍🌟
      </div>
    </div>
  );
}

export default App;
