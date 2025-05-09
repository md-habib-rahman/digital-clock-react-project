import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const fromatTime = (time) => time.toLocaleTimeString();

  return (
    <div>
      <h1>Digital Time</h1>
      <p>{fromatTime(time)}</p>
    </div>
  );
};

export default Clock;
