import React, { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="Navbar">
          <div className="Brand">THE FAMOUS GLAM LAB</div>
          <button className="GetUsersButton" onClick={fetchUsers}>
            Get Users
          </button>
        </nav>
        {loading ? (
          <div className="Loader">Loading...</div>
        ) : (
          <div className="UserGrid">
            {users.map((user) => (
              <div key={user.id} className="UserCard">
                <img src={user.avatar} alt={user.first_name} />
                <h3>
                  {user.first_name} {user.last_name}
                </h3>
                <p>Email: {user.email}</p>
              </div>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
