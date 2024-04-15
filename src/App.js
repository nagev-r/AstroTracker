import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pictureOfDay, setPictureOfDay] = useState(null);

  useEffect(() => {
    fetchPictureOfDay();
  }, []);

  const fetchPictureOfDay = async () => {
    try {
      const response = await axios.get('https://api.nasa.gov/planetary/apod', {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      });
      console.log('Picture of the day:', response.data);
      setPictureOfDay(response.data);
    } catch (error) {
      console.error('Error fetching picture of the day:', error);
    }
  };
  

  return (
    <div className="App">
      <header>
        <h1>Astro Tracker</h1>
        <nav>
          <ul>
            <li>Picture of the Day</li>
            <li>Astrological Tracker</li>
            <li>More Tools</li>
          </ul>
        </nav>
      </header>
      <main>
        {pictureOfDay && (
          <div className="picture-of-day">
            <img src={pictureOfDay.url} alt={pictureOfDay.title} />
            <h2>{pictureOfDay.title}</h2>
            <p>{pictureOfDay.explanation}</p>
          </div>
        )}
      </main>
      <footer>
        <p>&copy; 2024 Astro Tracker</p>
      </footer>
    </div>
  );
}

export default App;
