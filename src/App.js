import './App.css';
import Header from "./components/Header";
import TodoList from './components/TodoList';
import Form from "./components/Form";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  // const [completed, setCompleted] = useState(false);

  const completeTodo = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].isCompleted === true) {
      newTodos[index].isCompleted = false;
    }
    else {
      newTodos[index].isCompleted = true;
    }

    setTodos(newTodos);
  };

  const addTodo = (title) => {
    const newTodos = [...todos, { title }];
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <Form
            // input={input}
            // setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            addTodo={addTodo}
          />
        </div>
        <div>
          <TodoList
            // input={input}
            // setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            completeTodo={completeTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
