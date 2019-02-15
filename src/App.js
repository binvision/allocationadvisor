import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { LineChart, Line } from 'recharts';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

const renderLineChart = (
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>mathias</h1>
        {renderLineChart}
          <img src={logo} className="App-logo" alt="logo" />
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
}

export default App;
