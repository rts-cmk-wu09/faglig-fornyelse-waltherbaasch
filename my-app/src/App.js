import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [playerStats, setPlayerStats] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.eksempel.com/football/stats?player=${searchQuery}`);
      setPlayerStats(response.data);
    } catch (error) {
      console.error('Error fetching player stats:', error);
    }
  };

  return (
    <div className="App">
      <h1>Football Player Stats App</h1>
      <input
        type="text"
        placeholder="Enter player name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {playerStats && (
        <div>
          <h2>Player Stats for {playerStats.name}</h2>
          <p>Goals: {playerStats.goals}</p>
          <p>Assists: {playerStats.assists}</p>
          {/* Flere stats her */}
        </div>
      )}
    </div>
  );
}

export default App;

