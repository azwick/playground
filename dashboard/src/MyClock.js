// import { useState } from "react";

// let time = new Date().toLocaleString();
// let year = new Date().getFullYear();

// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let month = months[d.getMonth()];

// let weekdays = ["Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// let weekday = weekdays[d.getDay()];


// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString

let d = new Date();

let timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
let theTime = d.toLocaleString('de-DE', timeOptions);


let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const MyClock = () => {
    return (
        <>
            {/* <div>{theTime}</div> */}
            <span className="date">
                {d.toLocaleString('de-DE', dateOptions)}
                {/* {d.toLocaleString('en-EN', dateOptions)} */}
            </span>
        </>
    );
}

export default MyClock;