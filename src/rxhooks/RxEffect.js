/**
 * ### 2. Fetch and Display Data with `useEffect`
 * Use the `useEffect` hook to fetch data from an API (you can use a placeholder service like JSONPlaceholder) and display it in your component.
 */

import React, { useState, useEffect } from "react";

export default function RxEffect() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <h2> 2. Fetch and Display Data with `useEffect`</h2>
      <p>
        Use the `useEffect` hook to fetch data from an API (you can use a
        placeholder service like JSONPlaceholder) and display it in your
        component.
      </p>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
