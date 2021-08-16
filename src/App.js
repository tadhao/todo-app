import './App.css';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import TodoForm from './components/TodoForm';

function App() {
  const [listData, setListData] = useState([
    {text: "First List"}
  ]);

  const addTodoList = (text) => {
    const newData = [...listData, { text }]
    setListData(newData)
  }

  return (
    <>
    <div className="app">
      <div className="container">
        <h1 className="text-center">Todo App</h1>
        <TodoForm addTodoList={addTodoList} />
          { listData.map((list, index) => (
            <TodoList list={list} key={index} />
          ))
        }
      </div>
    </div>
    </>
  );
}

export default App;
