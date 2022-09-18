import React, {useState} from 'react'

function App() {
  const [count, setCount]=useState(0);
  function changeCount(){
    setCount(count=>count+1);
  }
  return (
    <div className='conatiner'>
      <h1 className='font-bold'>Hello: {count}</h1>
      <button className='py-2 px-4 border' onClick={changeCount}>Click me!</button>
    </div>
  );
}

export default App;