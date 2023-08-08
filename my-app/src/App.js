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
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-2xl font-semibold mb-4">Football Player Stats App</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter player name"
          className="border border-gray-300 rounded px-4 py-2 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white rounded px-4 py-2 ml-4"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {playerStats && (
        <div className="border border-gray-300 p-4 rounded">
          <h2 className="text-lg font-semibold">Player Stats for {playerStats.name}</h2>
          <p>Goals: {playerStats.goals}</p>
          <p>Assists: {playerStats.assists}</p>
          {/* flere stats*/}
        </div>
      )}
    </div>
  );
}

export default App;


