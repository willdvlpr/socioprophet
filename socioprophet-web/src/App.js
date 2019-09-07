import React, { Component } from 'react';
import Top from './components/Top';
import TerminalDrawer from './components/TerminalDrawer';
import Button from '@material-ui/core/Button';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top-side-nav">
          <Top /><br/><br/><br/><br/><br/><br/>
        </div>
        <TerminalDrawer />
      </div>
    );
  }
}

export default App;
