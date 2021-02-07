import React, {useState} from 'react';

import data from './dataToggle.json';

//
// Toggle Button
//
const ToggleOnOff = () => {
    const [on, setOn] = useState(true);

    const handleClick = (e) => {
        e.preventDefault()
        setOn(!on);
    }

    return (
        <section>
            <button className={!on ? "default" : ""} onClick={handleClick}>{on? "on" : "off"}</button>
        </section>
    );
}

//
// Toggle List Item
//
const ToggleListItem = () => {
    const [toDoList, setToDoList] = useState(data);

    const handleClick = (e) => {
        e.preventDefault()
        let mapped = toDoList.map(item => {
          return item.id === Number(e.currentTarget.id) ? { ...item, inProgress: !item.inProgress } : { ...item};
        });
        setToDoList(mapped);
    }

    return (
        <section>
            <h3>Checklist:</h3>
            <ul className="checklist">
                {toDoList.map((item) => {
                    return (
                        <li key={item.id} id={item.id} className={item.inProgress ? "" : "stroke"} onClick={handleClick}>{item.toDo}</li>
                    )})
                }
            </ul>
        </section>
    );
}

const ToggleIt = () => {
    return (
        <>
            <ToggleOnOff/>
            <ToggleListItem/>
        </>
    );
}

export default ToggleIt;