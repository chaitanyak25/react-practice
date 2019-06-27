import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  
    const [personsState, setPersonsState] = useState({
      persons: [
        { id: "1", name: "Chaitu", age: 29 },
        { id: "2", name: "Chaitanya", age: 28 },
        { id: "3", name: "Chait", age: 30 }
      ]
    });
  
    const stateChange = (newName) => {
      setPersonsState({
        persons: [
          { name: "Tarun", age: 29 },
          { name: "Chaitanya", age: 28 },
          { name: newName, age: 30 }
        ]
      });
    };
  
    const deletePersonHandler = (personIndex) => {
      const persons = personsState.persons;
      persons.splice(personIndex, 1);
      setPersonsState({ persons: persons });
    }
  
    const style = {
      backgroundColor:'white',
      padding: '15px',
      border: '1px solid #eee'
    }
  
    let persons = (
      <div>
        {personsState.persons.map((person, index) =>{
          return <Person  
          click={() => deletePersonHandler(index)}
          name={person.name} 
          age={person.age}
          key={props.id}/>
        })}
        </div>
    );
  
    return (
      <div className="App">
        <h1>I'm Chaitanya</h1>
        <button style={style} onClick={stateChange.bind(this, 'Sandy')}>Change Data</button>
        {/* <button onClick={() => stateChange('Nandu')}>Change Data</button> */}
        {/* <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
          click={stateChange.bind(this, 'Balu')} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} /> */}
        {persons}
      </div>
    );
  
}

export default app;

// return React.createElement('div', {className:'App'},React.createElement('h1',null,'I\'m Chaitu'));



