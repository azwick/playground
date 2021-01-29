import React from 'react';
import data from "./data.json";

//
// Map array of numbers
//
const MapNumbers = () => {
    const numbers = [5, 10, 15, 20, 25];

    const mapNumbers = numbers.map(number => `Nummer: ${number}, `);
    const doubleNumbers = numbers.map((number, index) => { return <span className="pill" key={index} >Nummer: {number * 2}</span>});

    return (
        <section>
            <h3>Map array of numbers</h3>
            <p>{mapNumbers}</p>
            {doubleNumbers}
        </section>
    );
}

//
// Map array of strings
//
const MapStrings = () => {
    const fruits = ["Apfel", "Birne", "Kirsche", "Banane", "Erdbeere"];

    return (
        <section>
            <h3>Map array of strings</h3>
            {fruits.map((fruit, index) => {
                return (
                    <span className="pill" key={index}> {fruit}</span>
                )
            })}
        </section>
    );
};

//
// Map strings within an item
//
const elementsList = [{
    "id": 1,
    "name": "Erde",
    "favorite": false,
    }, {
    "id": 2,
    "name": "Wasser",
    "favorite": true,
    }, {
    "id": 3,
    "name": "Luft",
    "favorite": false,
    }, {
    "id": 4,
    "name": "Feuer",
    "favorite": false,
}]

const MapObjects = () => {
  return (
    <section>
        <h3>Map array of objects</h3>
        {elementsList.map(element => {
            return (
                <span className={element.favorite ? "pill marked" : "pill"} id={element.id} key={element.id}>{element.name}</span>
            )
        })}
    </section>
  );
};

//
// Map strings within an item
//
const Item = ({elem}) => {
    return <span className={elem.favorite ? "pill marked" : "pill"} id={elem.id + 10}>-{elem.name}-</span>
}

const MapItems = () => {  
    return (
      <section>
          <h3>Map strings within an item</h3>
          {elementsList.map(elem => {
              return (
                  <Item key={elem.id} elem={elem}/>
              )
          })}
      </section>
    );
};

//
// Map data
//
const Card = ({card}) => {
    return (
    <span className={card.color === "rot" ? "pill red" : "pill black"} id={card.id}>
        {card.trump ? <i>{card.symbol} {card.name}</i> : <>{card.symbol} {card.name}</>}
    </span>
    )
}

const MapData = () => {  
    return (
      <section>
          <h3>Map data</h3>
          {data.map(card => {
              return (
                  <Card key={card.id} card={card}/>
              )
          })}
      </section>
    );
};

//
// Map LocalStorage
//
const MapStorage = () => {
    // localStorage.setItem('Give dog a bath', 1);
    // localStorage.setItem('Do laundry', 0);
    // localStorage.setItem('Feed cat', 1);
    // localStorage.setItem('Take nap', 0);
    // localStorage.setItem('Read book', 0);

    const storage = localStorage;
    const storageArray = Object.entries(storage);

    return (
      <section>
          <h3>Map LocalStorage</h3>
          {storageArray.map((keyValue, index) => {
              let key = keyValue[0];
              let value = parseInt(keyValue[1]);

              return (
                <span key={index} className={value ? "pill stroke" : "pill"}>
                    {key}
                </span>
              )
          })}
      </section>
    );
};


//
// Show everything
//
const MapIt = () => {
    return (
        <>
            <MapNumbers/>
            <MapStrings/>
            <MapObjects/>
            <MapItems/>
            <MapData/>
            <MapStorage/>
        </>
    );
}

export default MapIt;