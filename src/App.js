import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header.js';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log('Component DID MOUNT');    
  }

  render() {
    const name = 'Lain';

    return (
      <BrowserRouter>
        <div className="App">
          <Header name= {name} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
