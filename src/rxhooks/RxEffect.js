/**
 * ### 2. Fetch and Display Data with `useEffect`
 * Use the `useEffect` hook to fetch data from an API (you can use a placeholder service like JSONPlaceholder) and display it in your component.
 */

import React, { useState, useEffect } from 'react';

export default function RxEffect() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);
    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}