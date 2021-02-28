import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, settext] = useState("");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      <h1>{text || "hello world"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {text && <h1>je suis redouane jnah</h1>}
      {isError ? (
        <p>there is an error</p>
      ) : (
        <div>
          <h3>There is no error</h3>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
