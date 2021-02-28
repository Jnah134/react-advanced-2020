import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setvalue] = useState(0);
  const increaseHandler = () => {
    setvalue(value + 1);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      setvalue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <React.Fragment>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button
          type="button"
          className="btn"
          onClick={() => {
            setvalue(value - 1);
          }}
        >
          decrease
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => {
            setvalue(0);
          }}
        >
          reset
        </button>
        <button type="button" className="btn" onClick={increaseHandler}>
          increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
