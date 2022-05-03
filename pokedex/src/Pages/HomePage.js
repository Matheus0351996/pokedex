import React,{useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "./Card";

const StyledHeader = styled.div`
display: flex;
text-align: center;
align-items: center;
flex-direction: row;
background-color:lightblue;
width: 100vw;
margin-left: -10px;
margin-top: -10px;

h1{
margin-left: 33vw;

}`

const HomePage =()=> {
    
    return (
      <div>
        <StyledHeader>
            <button>Pokedex</button>
            <div><h1>Lista de Pokemons</h1> </div>
        </StyledHeader>
        <Card/>

      </div>
    );
  }
  
  export default HomePage;
  