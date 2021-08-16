import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import TodoForm from './components/TodoForm';

function App() {
  const [listData, setListData] = useState([
    {text: "First List"}
  ]); 
  return (
    <>
    <div className="app">
      <div className="container">
        <h1 className="text-center">Todo App</h1>
        <TodoForm />
          { listData.map((list) => (
            <TodoList list={list} />
          ))
        }
      </div>
    </div>
    </>
  );
}

export default App;
