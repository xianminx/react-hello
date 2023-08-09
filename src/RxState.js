
/** 
 * Demo component of useState
 * ### 1. Create a Counter Using `useState`
 * Create a simple counter application that has buttons to increment and decrement the count. Use the `useState` hook to manage the state of the counter.
 */
import React, { useState } from 'react';

export default function RxState() {
    const [count, setCount] = useState(0);
    return (
        <div>
            {count}
            <p />
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}
