import './Checklist.css';

import React, {createElement, useState} from 'react';

const List = (props) => (
  <ul className="list">
    {props.items.map(item => <Item deleteItem={props.deleteItem} {...item} />)}
  </ul>
 );

const Item = (props) => {
  const [itemValue, setItemValue] = useState("");

  const handleChange = (e) => {
    setItemValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newToDo = createElement('div', null, {itemValue});
    // <div className="content">{itemValue}</div>
    console.log(newToDo);
  }

  return (
    <li class="item">
     <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        onChange={handleChange}
        value={itemValue} 
        placeholder="Das ist mein neuer ToDo Punkt..."
      />
     </form>
     <span onClick={props.deleteItem} class="delete">✗</span>
    </li>
  );
}

const Counter = ({count, maxCount}) => {
  return (
    <span className="counter">{`${count} von ${maxCount}`}</span>
  );
}

const Checklist = ({title, maxCount}) => {
  const [items, setItem] = useState([]);
  const [count, setCount] = useState(0);

  const addItem = (newItem) => {
    setItem([...items, newItem]);
    setCount(count + 1);
  }
  const deleteItem = () => {
    console.log('Delete Item!');
    setCount(count - 1);
  }

  return (
    <div className="checklist">
      <h2 className="title">
        {title} <Counter count={count} maxCount={maxCount}/>
      </h2>
      <List deleteItem={deleteItem} items={items}/>
      <button onClick={addItem}>+</button>
    </div>
  );
}

export default Checklist