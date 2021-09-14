
//Har inte fått "godkänn villkor" knappen att fungera än. Håller på att arbeta med den. Vill göra
//så att ett error kommer upp om knappen inte är itryckt och att koden körs när knappen är itryckt


import './App.css';
import Form from './compontents/Form';
import React from "react";
import { useState } from 'react';
import Info from "./compontents/Info";

function App() {

  const [firstName, setFirstname] = useState('Förnamn!');
  const [lastName, setLastname] = useState('Efternamn!');
  const [classOption, setClassOption] = useState('Vald klass');
  const [amountOfTickets, setAmountOfTickets] = useState('Antal biljetter');
  const [title, setTitle] = useState('Titel');

    //Uppdatera firstname
    const updateFirstNameInApp = (firstName) => {
    //update state
    setFirstname(firstName);
    }
    //Uppdatera efternamn
    const updateLastNameInApp = (lastName) => {
    //update state
    setLastname(lastName);
    }
    //Uppdatera class
    const updateclassOptionInApp = (classOption) => {
    //update state
    setClassOption(classOption);
    }
    const updateAmountTicketsInApp = (amountOfTickets) => {
    //update state
    setAmountOfTickets(amountOfTickets);
    }
    const updateTitleInApp = (title) => {
    //update state
    setTitle(title);
    }
    

  

  return (
    <section className="App">
      <h1>ÅKA TÅG</h1>
      <section className="city-container">
        <article className="city city-one">
          <h2>Stockholm</h2>
          <p>10:30</p>
        </article>
        <article className="city city-two">
          <h2>Göteborg</h2>
          <p>14:45</p>
        </article>
      </section>
      <Info firstname={firstName} lastname={lastName} classOption={classOption} amount={amountOfTickets} title={title}/>
      <Form setFirstNameInApp={updateFirstNameInApp} setLastNameInApp={updateLastNameInApp} setClassOptionInApp={updateclassOptionInApp} 
      setAmountOfTicketsInApp={updateAmountTicketsInApp} setTitleInApp={updateTitleInApp}
      />

    </section>
  );
}

export default App;

