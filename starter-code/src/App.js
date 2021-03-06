import React, { Component } from 'react';
import IdCard from './components/IdCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard 
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth="1992-07-14"
        image='https://randomuser.me/api/portraits/men/44.jpg'
        />
        <IdCard 
        lastName='Delores'
        firstName='Obrien'
        gender='female'
        height={172}
        birth="1998-07-14"
        image='https://randomuser.me/api/portraits/women/44.jpg'
        />

        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
      </div>
    );
  }
}

export default App;
