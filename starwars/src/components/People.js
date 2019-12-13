import React from 'react';
import styled from 'styled-components';

const PeopleCard = (props) => {
   console.log(props);

    return (
        
        <div>
          <h2> {props.name}</h2>
          <h3>Born:{props.birthyear}</h3>
          <h3>Height: {props.height}</h3>
        </div>
    )
}

export default PeopleCard; 