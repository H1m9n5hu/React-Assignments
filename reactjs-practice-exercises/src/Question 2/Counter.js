import React, { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <>
        <h1>Counter App</h1>
        <div>
            <h1>{number}</h1>
            <button type='button' onClick={() => setNumber(number-1)}>Decrement</button>
            <button type='button' onClick={() => setNumber(number+1)}>Increment</button>
        </div>
    </>
  )
}

export default Counter