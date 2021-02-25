import './Checklist.css';

import React, {useEffect, useState} from 'react';

import Item from './Item';
import data from "./data.json";

const Checklist = ({title, maxCount}) => {
  // const [toDos, setToDos] = useState([]);
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
        return (item.id === (e.currentTarget.parentNode.id) ? { ...item, complete: !item.complete } : { ...item});
      });
      setToDos(mapped);
  }

  const handleDeletion = (e) => {
      e.preventDefault()
      let filteredList = toDos.filter(item => {
        return (item.id !== e.currentTarget.parentNode.id);
      });
      setToDos(filteredList);
      setCount(count - 1);
  }

  const addItem = () => {
    const keyId = ((count + 1) + title.replace(/[^a-zA-Z0-9]/g,''));
    const copyItem = [...toDos, { id: keyId, content: null, complete: false }];
    setToDos(copyItem);
    setCount(count + 1);
  }

  const updateItem = (userContent, e) => {
    const newList = toDos.map((item) => {
      if (item.id === e.currentTarget.parentNode.id) {
        const keyId = (count + title + userContent).replace(/[^a-zA-Z0-9]/g,'');
        const updatedItem = {...item, id: keyId, content: userContent };
        return updatedItem;
      }
      return item;
    });
    setToDos(newList);
  }

  return (
    <div className="checklist">
      <h2 className="title">
        {title} <span className="counter">{count} von {maxCount}</span>
      </h2>
      <ul className="list">
        {toDos.map((item) => {
          return (
              <Item key={item.id} item={item} handleToggle={handleToggle} handleDeletion={handleDeletion} updateItem={updateItem} />
            )
          })}
      </ul>
      {count < maxCount &&
        <button onClick={addItem}>+</button>
      } 
    </div>
  );
}

export default Checklist;
