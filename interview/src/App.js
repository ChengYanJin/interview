import React, { useState } from "react";
import logo from "./logo.svg";
import list from "./data";

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
  return (
    <div className="app">
      <div className="container">
        <img src={logo} className="toto" />
        <div style={{ listStyle: "none" }} className="list">
          {persons.map(i => (
            <li>
              {i.first_name} {i.last_name}
            </li>
          ))}
        </div>
      </div>
      <div
        class="button"
        onClick={() => {
          setPersons(persons.push(newPerson));
        }}
      >
        Add
      </div>
    </div>
  );
}

export default App;
