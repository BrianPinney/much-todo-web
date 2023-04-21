import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {

const [loading, setLoading] = useState(true)
const [itemList, setItemList] = useState()

  return (
    <main>
      <h1>Much ToDo</h1>
      <Header setLoading={setLoading}
      setItemList={setItemList}/>
      <ToDoList 
        loading={loading} 
        itemList={itemList} 
        setItemList={setItemList}
        setLoading={setLoading}
        />
    </main>
  );
}

export default App;
