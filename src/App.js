import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
console.log(process.env)

class App extends Component {
state = {
    data: null,
    waters: []
  };

  async componentDidMount() {
      // Call our fetch function below once the component mounts
      this.getWaters()
      .then(res => this.setState({ waters: res }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch('/backend');
  //   console.log(response)
  // const body = await response.json();
  //
  //
  //   if (response.status !== 200) {
  //     throw Error(body.message)
  //   }
  //   return body;
  // };

  getWaters = async () => {
    const response = await fetch('http://localhost:9000/waters')
    const body = await response.json()
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }

  render() {
    console.log(this.state.waters)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h2> OMG HAIIIIII!</h2>
          {this.state.waters.map(water => {
           return  <p>{water.brand}</p>
          })}
        </header>
      </div>
    );
  }
}

export default App;
