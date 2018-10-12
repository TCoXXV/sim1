import React, { Component } from 'react';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard.jsx'
import Form from './Component/Form/Form.jsx'
import Header from './Component/Header/Header.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Form />
          
      </div>
    );
  }
}

export default App;
