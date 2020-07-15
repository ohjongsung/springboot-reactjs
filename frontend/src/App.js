import React, {Component} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: "오늘"
    }
  }

  componentDidMount() {
    axios.get('/api/now')
        .then((response) => this.setState({message : response.data}))
  }

  render() {
    const { message } = this.state;
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
    )
  }
}

