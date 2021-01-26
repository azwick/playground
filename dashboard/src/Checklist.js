import './Checklist.css';

import React, {useState} from 'react';

//
// List.js
//
const List = (props) => (
  <ul className="list">
    {props.items.map((item, index) => <Item key={index} handleDeletion={props.handleDeletion} {...item} />)}
  </ul>
);

//
// Item.jsx
//
const Item = (props) => {
  const [itemValue, setItemValue] = useState("");
  const [isConfirmed, setConfirm] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = (e) => {
    setItemValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirm(!isConfirmed);
  }

  const toggleState = () => {
    setDone(!done);
  }

  return (
    <li className="item">
      {!isConfirmed ? ( 
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
      )}
     <span onClick={props.handleDeletion} className="delete">✗</span>
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
// Checklist.jsx
//
const Checklist = ({title, maxCount}) => {
  const [items, setItem] = useState([]);
  const [count, setCount] = useState(0);

  const addItem = (newItem) => {
    setItem([...items, newItem]);
    setCount(count + 1);
  }

  const handleDeletion = (el) => {
    const updateList = items.filter((item) => item.el !== el);
    setItem([updateList]);

    console.log(el);
    setCount(count - 1);
  }

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

export default Checklist