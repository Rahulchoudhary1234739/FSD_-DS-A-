import React from 'react';

const Counter = () => {
    const [count, setCount] = React.useState(0);
  return (
    <div>
      <h3> Counter App</h3>
      <br/>
      <button
        onClick={() => setCount(current => current < 10 ? current + 1 : current)}
        disabled={count === 10}
      >
        +
      </button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;