import {useEffect, useState} from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    // Replaces componentDidMount and componentWillUnmount
    useEffect(() => {
        let timer = setInterval( () => tick(), 1000 );

        return function cleanup() {
            clearInterval(timer);
        };
    });

    function tick() {
        setDate(new Date());
    }

    return (
        <div className="clock">
            {date.toLocaleTimeString()}
        </div>
    );
}

export default Clock;
