import './Checklist.css';

import React, {useEffect, useState} from 'react';

import data from "./data.json";

//
// List.js
//
const List = ({items, handleDeletion}) => (
  <ul className="list">
    {items.map((item) => <Item key={item.id} item={item} id={item.id} handleDeletion={handleDeletion} />)}
  </ul>
);

//
// Item.jsx
//
const Item = ({item, handleDeletion}) => {
  // const [itemValue, setItemValue] = useState("");
  // const [isConfirmed, setConfirm] = useState(false);
  const [done, setDone] = useState(false);

  // const handleChange = (e) => {
  //   setItemValue(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setConfirm(!isConfirmed);
  // }

  const toggleState = () => {
    setDone(!done);
  }

  const handleMyClick = (e) => {
    e.preventDefault()
    handleDeletion(e.currentTarget.parentNode.id)
  }

  return (
    <li id={item.id} className="item">
      {/* !isConfirmed */}
      {/* {(item.content.length < 0) ? ( 
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            onChange={handleChange}
            value={itemValue} 
            placeholder="Bezeichnung..." 
            required
          />
        </form>
      ) : ( 
        <div onClick={toggleState} className={done ? 'done' : ''}>{itemValue}</div>
      )} */}
      <div onClick={toggleState} className={done ? 'done' : ''}>{item.content}</div>
      <span onClick={handleMyClick} className="delete">✗</span>
    </li>
  );
}

//
// Counter.jsx
//
const Counter = ({count, maxCount}) => (
  <span className="counter">{`${count} von ${maxCount}`}</span>
)

//
// ChecklistNew.jsx
//
const ChecklistNew = ({title, maxCount}) => {
  const [items, setItem] = useState(data);

  const addItem = (newItem) => {
    setItem([...items, newItem]);
  }

  const handleDeletion = (id) => {
    let updateList = items.filter((item) => item.id !== id);  // ToDo: I'm not sure what to write here to make it work...
    setItem([updateList]);
    console.log([updateList]);
  }

  const [count, setCount] = useState(items.length);

  useEffect(() => {
    let counter = setCount(items.length);

    return function cleanup() {
      clearInterval(counter);
    };
  }, []);

  return (
    <div className="checklist">
      <h2 className="title">
        {title} <Counter count={count} maxCount={maxCount}/>
      </h2>
      <List handleDeletion={handleDeletion} items={items}/>
      {count < maxCount &&
        <button onClick={addItem}>+</button>
      }
    </div>
  );
}

export default ChecklistNew;

/*
Further ideas for ToDos:
-> Save the checklist items in the localStorage
-> Focus the input field of a created item
-> Make items draggable for changing the position (only inside of their own list)
*/