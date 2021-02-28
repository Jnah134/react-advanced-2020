import React, { useState } from "react";

const UseStateObject = () => {
  const [people, setpeople] = useState({
    name: "Peter",
    age: 24,
    message: "random message",
  });
  const { name, age, message } = people;
  const handlerClick = () => {
    setpeople({ ...people, message: "Hello World!!" });
  };

  return (
    <>
      <h2>{name}</h2>
      <h4>{age}</h4>
      <h4>{message}</h4>
      <button type="button" className="btn" onClick={handlerClick}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
