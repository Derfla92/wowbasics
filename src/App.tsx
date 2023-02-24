import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Exercise from './Components/Exercise';



function App() {
  return (
    <>
      <Header/>
      <Exercise number={0}/>
    </>
  );
}

export default App;
