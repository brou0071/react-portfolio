import { useState } from 'react';

const Time = () => {
  const [dateTime, setDateTime] = useState('Loading...')

  function tick() {
    setDateTime(new Date().toLocaleTimeString());
  }
  
  setInterval(tick, 1000);

  return dateTime;
}

export default Time;