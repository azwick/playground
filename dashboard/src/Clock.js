import {useEffect, useState} from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const timeOptions = { hour: 'numeric', minute: 'numeric' };
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const myClock = date.toLocaleString('de-DE', timeOptions);

  useEffect(() => {
    let timer = setInterval( () => tick(), 1000 );

    return function cleanup() {
      clearInterval(timer);
    };
  }, [myClock]);

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <div className="clock">
        {/* {date.toLocaleTimeString()} <br/> */}
        {myClock}
      </div>
      <div className="date">
        {date.toLocaleString('de-DE', dateOptions)}
      </div>
    </div>
  );
}

export default Clock;

/* Notes:

  useEffect
  > Replaces componentDidMount and componentWillUnmount

  setInterval()
  > https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

  clearInterval()
  > https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval

  toLocaleTimeString() // 21:14:18
  > https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString

*/