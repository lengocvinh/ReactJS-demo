import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // if (count === 0) {
    //   return;
    // }
    let timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return <div>{count}s</div>;
};
export default Countdown;
