import './Checklist.css';

import React, {useEffect, useState} from 'react';

import data from "./data.json";

const Checklist = ({title, maxCount}) => {
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
        return (item.id == (e.currentTarget.parentNode.id) ? { ...item, complete: !item.complete } : { ...item});
      });
      setToDos(mapped);
  }

  const handleDeletion = (e) => {
      e.preventDefault()

      let filteredList = toDos.filter(item => {
        return (item.id != e.currentTarget.parentNode.id);
      });
      setToDos(filteredList);
      setCount(count - 1);
  }

  // ToDo: Fix behaviour of add & update items
  const addItem = () => {
    let copy = [...toDos];
    const keyId = ((count + 1) + title.replace(/[^a-zA-Z0-9]/g,''));
    copy = [...copy, { id: keyId, content: null, complete: false }];
    setToDos(copy);
    setCount(count + 1);
  }

  const updateItem = (userContent) => {
    const keyId = (((count + 1) + title + userContent).replace(/[^a-zA-Z0-9]/g,''));
    setToDos([...toDos, { id: keyId, content: userContent, complete: false }]);
  }

  const InputForm = () => {
    const [ inputValue, setInputValue ] = useState('');

    const handleChange = (e) => {
      setInputValue(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      return updateItem(inputValue);
    }

    return (
      <form onSubmit={handleSubmit}>
          <input value={inputValue} type="text" onChange={handleChange} placeholder="Your ToDo..." required/>
      </form>
    )
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
              {item.content ? <div onClick={handleToggle} className={item.complete ? 'done' : ''}>{item.content}</div> : <InputForm/> }
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

export default Checklist;
