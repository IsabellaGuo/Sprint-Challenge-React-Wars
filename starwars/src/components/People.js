import React from 'react';
import styled from 'styled-components';

const PeopleCard = (props) ={
    console.log(props);

    return (
        <div>
          <h2>{props.name}</h2>
          <h2>Born: {props.birthyear}</h2>
        </div>
    )
}

export default PeopleCard; 