import React, {useState} from 'react';

import data from './dataFilter.json';

//
// Introduce Filter
//
const buttonData = [{
    "id": 1,
    "active": true,
    "value": "Show all",
    "category": "all"
},{
    "id": 2,
    "active": false,
    "value": "Kitchen",
    "category": "kitchen"
}, {
    "id": 3,
    "active": false,
    "value": "Living Room",
    "category": "livingroom"
}, {
    "id": 4,
    "active": false,
    "value": "Basement",
    "category": "basement"
}]

const IntroduceFilter = () => {
    const [activeButton, setActiveButton] = useState(buttonData);

    const handleClick = (e) => {
        e.preventDefault();

        let mapped = activeButton.map((button) => {
            return button.id === Number(e.currentTarget.id) ? { ...button, active: !button.active } : { ...button};
        });
        setActiveButton(mapped);
    };

    return (
        <>
            <h3>Filter Me:</h3>

            <div>
                {activeButton.map((button) => {
                    return (
                        <button id={button.id} key={button.id} onClick={handleClick} className={button.active ? '' : 'default'}>{button.value}</button>
                    )})
                }
            </div>

            <ul className="checklist">
                {data.map((item) => <li key={item.id} id={item.id}>{item.title}</li>)}
            </ul>

            <h3>New</h3>
            <ul className="checklist">
                {console.log(<li>{data.filter((item) => item.category === "kitchen" )}</li>)}
            </ul>
        </>
    )
}

//
// Done Filter
//
const DoneFilter = () => {
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

const FilterIt = () => {
    return (
        <>
            <IntroduceFilter/>
            {/* <DoneFilter/> */}
        </>
    );
}

export default FilterIt;