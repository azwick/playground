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
  }, [myClock]); // ToDo: I'm not sure what to write here...

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <div className="clock">
        {myClock}
      </div>
      <div className="date">
        {date.toLocaleString('de-DE', dateOptions)}
      </div>
    </div>
  );
}

export default Clock;