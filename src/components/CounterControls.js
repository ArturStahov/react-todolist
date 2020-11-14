import React from 'react';

export default function ({ onIncrement, onDecrement }) {
  return (
    <div>
      <button type="button" onClick={onIncrement}>
        Increment
      </button>
      <button type="button" onClick={onDecrement}>
        decrement
      </button>
    </div>
  );
}
