import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import styled from 'styled-components';
import PeopleCard from './components/People';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const Div = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `;

  const [people, setPeople] = useState([]);

  useEffect(() => {
    Axios
    .get('https://swapi.co/api/people/')
    .then(response => {
      console.log(response);
      setPeople(response.data.results);
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Div>
        {people.map(people => <PeopleCard name = {people.name} birthyear = {people['birth_year']} height = {people.height}/>)}
      </Div>
    </div>
  );
}

export default App;
