import React, { Component } from 'react';
import './App.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis  } from 'recharts';



class App extends Component {

  constructor(){
    super()
    this.state = {
      p1: {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
      p2: {name: 'Page B', uv: 350, pv: 2000, amt: 2000},
      p3: {name: 'Page C', uv: 300, pv: 1800, amt: 2200},
      p4: {name: 'Page D', uv: 350, pv: 1900, amt: 2100}
    }

  }
  
  onP2Change = (value)=>{
    const p2 = {...this.state.p2,uv: value} // overwrite uv 
    this.setState({p2})
  }

  render() {
    console.log("render")
    const {p1,p2,p3,p4} = this.state
    const data = [p1,p2,p3,p4]

    return (
      <div className="App">
        <form>
          <label>P2</label>
          <input type="number" step="30" defaultValue={this.state.p2.uv} onChange={(event)=>this.onP2Change(event.target.value)}/>
        </form>
        <hr/>
        <LineChart width={400} height={300} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
        <hr/>
        <p>Greetings from Ireland.</p>
      </div>
    );
  }
}

export default App;
