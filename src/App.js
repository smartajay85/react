import logo from './logo.svg';
import './App.css';
import User from  './User';
import Student from './Student';
import React,{Component} from 'react';

function App() {

  function Apple(){
    return (<h1>Apple Comp</h1>)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Ajay</h1>
        <User />
        <Student />
        <Apple />
        {Apple()}
      </header>
    </div>
  );
}

export default App;
