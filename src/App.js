import React, {useState} from 'react';
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='app'>
      <header>
        <h1>{count} </h1>
      </header>
      <div>
        <button onClick={() => setCount(0)}>Reset Counter</button>
        <button onClick={() => setCount(count + 1)}>Incresse Counter</button>
        <button onClick={() => setCount(count - 1)}>Decrease Counter</button>
      </div>
    </div>
  )
}

export default App;