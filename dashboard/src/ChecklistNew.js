import './Checklist.css';

import React, {useEffect, useState} from 'react';

import data from "./data.json";

const ChecklistNew = ({title, maxCount}) => {
  const [toDos, setToDos] = useState(data);
  const [count, setCount] = useState(toDos.length);

  useEffect(() => {
    let counter = setCount(toDos.length);

    return function cleanup() {
      clearInterval(counter);
    };
  }, []);

  const handleToggle = (e) => {
      e.preventDefault()

      let mapped = toDos.map(item => {
        return (item.id === Number(e.currentTarget.parentNode.id) ? { ...item, complete: !item.complete } : { ...item});
      });
      setToDos(mapped);
  }

  const handleDeletion = (e) => {
      e.preventDefault()

      let filteredList = toDos.filter(item => {
        return (item.id !== Number(e.currentTarget.parentNode.id));
      });
      setToDos(filteredList);
      setCount(count - 1); // Right place?
  }

  const addItem = (newItem) => {
    setToDos([...toDos, newItem]);
    setCount(count + 1); // Right place?
  }

  return (
    <div className="checklist">
      <h2 className="title">
        {title} <span className="counter">{count} von {maxCount}</span>
      </h2>
      <ul className="list">
        {toDos.map((item) => {
          return (
            <li key={item.id} id={item.id} className="item">
              <div onClick={handleToggle} className={item.complete ? 'done' : ''}>{item.content}</div>
              <span onClick={handleDeletion} className="delete">✗</span>
            </li>
            )
          })}
      </ul>
      {count < maxCount &&
        <button onClick={addItem}>+</button>
      } 
    </div>
  );
}

export default ChecklistNew;
