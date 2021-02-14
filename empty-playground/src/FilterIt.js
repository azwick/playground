import React, {useState} from 'react';

import cardData from './data.json';
import data from './dataFilter.json';

//
// Simple Filter
//
const SimpleFilter = () => {
    const newData = data.filter((items) => items.filterValue === 'kitchen');
    return (
        <ul className="checklist">
            {newData.map((newItem, index) => <li key={index}><b>Filtered (from kitchen):</b> {newItem.title}</li>)}
        </ul>
    );
}

//
// Change Filter with useState
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

const ChangeFilter = () => {
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

//
// Deletion Filter
//
const DeletionFilter = () => {
    const [deletionList, setDeletionList] = useState(cardData);

    const handleDeletion = (id) => {
        const newList = deletionList.filter((updateList) => updateList.id !== id);
        setDeletionList(newList);
    }

    return (
        <div className="elements">
            {deletionList.map((item) => {
                return (
                    <div key={item.id} id={item.id}>
                        {item.name}<button onClick={() => handleDeletion(item.id)}>X</button>
                    </div>
                )
            })}
        </div>
    );
}

const FilterIt = () => {
    return (
        <>
            <SimpleFilter/>
            <br/><br/>
            <ChangeFilter/>
            <br/><br/>
            <h3>Delete me:</h3>
            <DeletionFilter/>
        </>
    );
}

export default FilterIt;