import React from 'react';
import styled from 'styled-components';

const PeopleDiv = styled.div`
    background-color: #ffa259;
    width: 25%;
    margin: 2rem;
    border: 5px solid #fa4252;
  `;
const PeopleCard = (props) => {
   console.log(props);

    return (
        
        <PeopleDiv>
          <h2> {props.name}</h2>
          <h3>Born:{props.birthyear}</h3>
          <h3>Height: {props.height}</h3>
        </PeopleDiv>
    )
}

export default PeopleCard; 