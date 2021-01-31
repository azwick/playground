import React, {useEffect, useState} from 'react';

const fetchJokes = async () => {
    const response = await fetch(`https://official-joke-api.appspot.com/jokes/ten`);
    const result = await response.json();
    return result;
};

const List = () => {
    const [jokes, setJokes] = useState([]);
    
    useEffect(() => {
        fetchJokes().then(data => setJokes(data));
    }, []);

    return (
        <section className="jokes">
            {/* Slice - limits items */}
            {jokes.slice(0, 4).map(joke => {
                return (
                    <Item key={joke.id} joke={joke}/>
                )
            })}
        </section>
    );
}

const Item = ({joke}) => {
    return (
        <div id={joke.id}>
            <h3>{joke.setup}</h3>
            <p>{joke.punchline}</p>
        </div>
    );
}


const GetIt = () => {
    return (
        <List/>
    );
}

export default GetIt;