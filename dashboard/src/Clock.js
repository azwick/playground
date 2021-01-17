import {useEffect, useState} from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const timeOptions = { hour: 'numeric', minute: 'numeric' };
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

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
    <>
      <div className="clock">
        {/* {date.toLocaleTimeString()} <br/> */}
        {date.toLocaleString('de-DE', timeOptions)}
      </div>
      <div className="date">
        {date.toLocaleString('de-DE', dateOptions)}
      </div>
    </>
  );
}

export default Clock;

{/* Notes:

  useEffect
  > Replaces componentDidMount and componentWillUnmount

  setInterval()
  > https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

  clearInterval()
  > https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval

  toLocaleTimeString() // 21:14:18
  > https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString

*/}