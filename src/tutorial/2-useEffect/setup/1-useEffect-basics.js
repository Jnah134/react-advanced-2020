import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setvalue] = useState(0);
  useEffect(() => {
    console.log("call useeffect ");

    if (value > 0) {
      document.title = `New messages (${value})`;
    }
  });

  return (
    <>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setvalue(value + 1);
        }}
      >
        change number
      </button>
    </>
  );
};

export default UseEffectBasics;
