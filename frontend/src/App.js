import React, { useState, useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('오늘');

  useEffect(() => {
    axios.get('/api/now')
        .then((response) => setMessage(response.data))
  })

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{message}</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;
