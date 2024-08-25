import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const initialCount = Number(localStorage.getItem('count')) || 0;
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
