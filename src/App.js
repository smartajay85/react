import logo from './logo.svg';
import './App.css';
import User from  './User';
import Student from './Student';
import React,{Component} from 'react';

function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}

export default function App() {

  function Apple(){
    return (<h3>Apple Comp</h3>)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>Hello Ajay</h3>
        <User />
        <Student />
        <Apple />
        {Apple()}
        <Avatar/>
        <h4>Prpos in react</h4>
        <User name ='Ajay' email='ajay@test.com'     other={{add:"DELHI", mobile:"111111111"}}/>
        <User name ='Sanjay' email='sanjay@test.com' other={{add:"NOIDA", mobile:"222222222"}}/>
      </header>
    </div>
  );
}



//export default App;
