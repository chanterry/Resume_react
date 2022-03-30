import React from 'react';
import './App.css';
import Header from './Components/Header';
import LeftColumn from './Components/LeftColumn';
import RightColumn from './Components/RightColumn';

function App() {

  return (
    <div className="App">
      <Header/>
      <div className="grid_container">
        <div className="left_column">
          <LeftColumn/>
        </div>
        <div className="right_column">
          <RightColumn/>
        </div>
      </div>
    </div>
  );

}

export default App;