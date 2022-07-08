import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [intialValue, setIntialValue] = useState(0)

  function handleCountIncrement(event) {
    setCount(count + 1);
  }

  function handleCountDecrement(event) {
    setCount(count - 1);
  }

  // function handleIntialValue(event) {
  //   setIntialValue(parseInt(event.target.value, 10));
  // }

  return (
    <div>
      <header>Counter App</header>
      <span>{count}</span>
      <br />
      <br />
      {/* Initial Value */} 
      {/* <label htmlFor="intialValue">Initial Value</label>
      <input id="intialValue" value={intialValue} onChange={handleIntialValue}/> */}
      <br />
      <br />
      {/* Increment Button */}
      <button onClick={handleCountIncrement}>Increment</button>
      <br />
      {/* Decrement Button */}
      <button onClick={handleCountDecrement}>Decrement</button>
    </div>
  );
}

export default App;
