import './App.css';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import TodoForm from './components/TodoForm';

function App() {
  const [listData, setListData] = useState([
    {text: "First List", isDone: false}
  ]);

  const addTodoList = text => {
    const newData = [{ text }, ...listData]
    setListData(newData)
  }

  const markDone = index => {
    let existingData = [...listData]
    existingData[index].isDone = true
    setListData(existingData)
  }

  const deleteItem = index => {
    let existingData = [...listData]
    existingData.splice(index, 1)
    setListData(existingData)
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center">Todo App</h1>
        <TodoForm addTodoList={addTodoList} />
          { listData.map((list, index) => (
            <TodoList 
              list={list}
              key={index}
              markDone={markDone}
              deleteItem={deleteItem}
              index={index}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
