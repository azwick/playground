import React, {useState} from 'react';

//
// Use State
//
const UseStateExample1 = () => {
    const [name, setName] = useState('Click a Button!');

    const handleClick = (nameProp, e) => {
        e.preventDefault();
        setName(`Hallo ${nameProp}`);
    }

    return (
        <>
            <h3>{name}</h3>
            <button onClick={(e) => handleClick('Paul', e)} className='default'>Write 'Paul'</button>
            <button onClick={(e) => handleClick('Marie', e)} className='default'>Write 'Marie'</button>
            <button onClick={(e) => handleClick('Frieda', e)} className='default'>Write 'Frieda'</button>
            <button onClick={(e) => handleClick('Hilda', e)} className='default'>Write 'Hilda'</button>
        </>
    );
}

//
// Use State with mapping
//
const UseStateExample2 = () => {
    const buttonData = [{
        id: 1,
        value: 'Anne',
        active: false
    }, {
        id: 2,
        value: 'Flo',
        active: false
    }, {
        id: 3,
        value: 'Fabi',
        active: false
    }, {
        id: 4,
        value: 'Anna',
        active: false
    }];

    const [name, setName] = useState('Click a Button!');
    const [on, setOn] = useState(false);

    const handleClick = (button, e) => {
        e.preventDefault();
        setName(`Hallo ${button.value}`);
        setOn(button.id);
    }

    return (
        <>
            <h3>{name}</h3>
            {buttonData.map((data) => {
                const isOn = data.id === on;
                return (
                    <button key={data.id} onClick={(e) => handleClick(data, e)} className={isOn? '' : 'default'}>
                        Write {data.value}
                    </button>
                )
            })}
        </>
    );
}

const UseIt = () => {
    return (
        <section>
            <UseStateExample1/>
            <br/><br/><br/>
            <UseStateExample2/>
        </section>
    );
}
 
export default UseIt;