import './Checklist.css';

import React, {useState} from 'react';

// key={Math.random()} 

const List = (props) => (
  <ul className="list">
    {props.items.map(item => <Item deleteItem={props.deleteItem} {...item} />)}
  </ul>
);

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
     <span onClick={props.deleteItem} className="delete">✗</span>
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

  const deleteItem = (el) => {
    // const newList = items.filter((item) => item.el !== el);
    // setItem([newList]);

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