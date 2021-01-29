import React, {useState} from 'react';

// localStorage.setItem('myData', data);
// localStorage.getItem('myData');
// localStorage.removeItem('myData');
// localStorage.clear();
// https://www.robinwieruch.de/local-storage-react


//
// List
//
const List = ({storage}) => {
    // const storage = localStorage;
    const storageArray = Object.entries(storage);

    const [done, setDone] = useState(0);
    const handleToggle = () => {
        // setDone(localStorage.setItem({key}, !done));
        console.log(done);
    }

    return (
      <ul className="list">
          {storageArray.map((keyValue, index) => {
              let key = keyValue[0];
              let value = parseInt(keyValue[1]);

              return (
                <li key={index} onClick={handleToggle} className={value ? "item stroke" : "item"}>
                    {key}
                </li>
              )
          })}
      </ul>
    );
};

//
// Form
//
const Form = () => {
    const [toDo, setToDo] = useState('');

    const handleChange = (e) => setToDo(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem(toDo, 0);
    }

    return (
        <form onSubmit={handleSubmit} className="space">
            <input type="text" value={toDo} onChange={handleChange} required/>
        </form>
    );
}

const StoreIt = () => {
    const [storage, setStorage] = useState(localStorage);

    return (
        <>
            <h1>Checklist</h1>
            <List storage={storage} />
            <Form />
        </>
    );
}

export default StoreIt;