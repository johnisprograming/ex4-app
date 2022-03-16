import { useState } from 'react';
import './App.css';
import Content1 from './components/Content1';
import Content2 from './components/Content2';

function App() {
  const [title, setTitle] = useState("지금 우리 학교는");

  const onTitleChange = (inputValue) => {
    setTitle(inputValue);
  }

  return (
    <div className="App">
      <Content1 title={title}></Content1>
      <Content2 onTitleChange={onTitleChange}></Content2>
    </div>
  );
}

export default App;