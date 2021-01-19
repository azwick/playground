import './Checklist.css';

import React, {useState} from 'react';

const List = (props) => (
    <ul className="list">
      {props.items.map(item => <Item {...item} />)}
    </ul>
  );

const Item = () => {
    return (
        <li class="item">
            <div class="content">
                <input type="text"/>
            </div>
            <span class="delete">✗</span>
        </li>
        // <li className="item">
        //     <div className="content">hahaha</div>
        //     <span className="delete">✗</span>
        // </li>
    );
}

const Counter = ({count}) => {
    const maxValue = count;

    return (
        <span className="counter">{`0 von ${maxValue}`}</span>
    );
}

const Checklist = ({title, count}) => {
    const [items, setItem] = useState([]);

    const addNewItem = (newItem) => {
        setItem([...items, newItem]);
    };

    return (
        <div className="checklist">
            <h2 className="title">
                {title} <Counter count={count}/>
            </h2>
            <List items={items}/>
            <button onClick={addNewItem}>+</button>
        </div>
    );
}

export default Checklist