import React, { useState } from "react";
import logo from "./logo.svg";
import { list } from "./data";

var newPerson = {
  id: 0,
  first_name: "Charles",
  last_name: "Newen",
  email: "charles@toto.com",
  age: 30,
  ip_address: "999.999.999.999"
};

function App() {
  var [persons, setPersons] = useState(list);
  const personList = persons.map(person => (
    <li key={person.id}> 
      {person.first_name} {person.last_name}
    </li>
  ))

  const isPersonExist = persons.some(person => {
    return person.id === newPerson.id
  }) 

  const addPerson = () => {
    if (isPersonExist) {
      alert("Already exists :)")
    }
    else {
      setPersons([...persons, newPerson])
    }
  }
  return (
    <div className="app">
      <div className="container">
        <img src={logo} className="toto" alt="logo"/>
        <div className="list">
          {personList}
        </div>
      </div>
      <div
        className="button"
        onClick={addPerson}
      >
        Add
      </div>
    </div>
  );
}

export default App;

