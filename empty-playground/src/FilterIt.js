import React, {useState} from 'react';

import data from './dataFilter.json';

//
// Introduce Filter
//
const buttonArray = [{
    "id": 1,
    "active": true,
    "value": "Show all",
    "filterValue": "all"
},{
    "id": 2,
    "active": false,
    "value": "Kitchen",
    "filterValue": "kitchen"
}, {
    "id": 3,
    "active": false,
    "value": "Living Room",
    "filterValue": "livingroom"
}, {
    "id": 4,
    "active": false,
    "value": "Basement",
    "filterValue": "basement"
}]

const IntroduceFilter = () => {
    const [myFilter, setMyFilter] = useState(data);
    const [on, setOn] = useState(false);

    const handleClick = (element, e) => {
        e.preventDefault();
        setOn(element.id);

        if (element.filterValue === 'all') {
            setMyFilter(data);
        } else {
            const newData = data.filter((selectData) => { return selectData.filterValue === element.filterValue });
            setMyFilter(newData);
        }
    };

    return (
        <>
            <div>
                {buttonArray.map((buttonEl) => {
                    const isOn = buttonEl.id === on;
                    return (
                        <button id={buttonEl.id} key={buttonEl.id} onClick={(e) => handleClick(buttonEl, e)} className={isOn? '' : 'default'}>{buttonEl.value}</button>
                    )})
                }
            </div>

            <ul className="checklist">
                {myFilter.map((item) => <li key={item.id} id={item.id}>{item.title}</li>)}
            </ul>
        </>
    )
}

const FilterIt = () => {
    return (
        <>
            <IntroduceFilter/>
        </>
    );
}

export default FilterIt;