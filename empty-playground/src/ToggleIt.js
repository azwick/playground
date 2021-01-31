import React, {useState} from 'react';

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
const data = [{
    "id": 901,
    "toDo": "Küche aufräumen",
    "inProgress": true
}, {
    "id": 902,
    "toDo": "Keller ausmisten",
    "inProgress": true
}, {
    "id": 903,
    "toDo": "Stube saugen",
    "inProgress": true
}, {
    "id": 904,
    "toDo": "Terasse fegen",
    "inProgress": true
}, {
    "id": 905,
    "toDo": "Staub wischen",
    "inProgress": true
}];

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