import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
width: 40px;
height: 40px;
background-color: lightgray;
border: 1px solid black;
`


const Card =()=> {
    
    return (
      <StyledCard>
       <img>dasda</img>
       <button>Add a Pokedex</button>
       <button>Ver Detalhes</button>
      </StyledCard>
    );
  }
  
  export default Card;
