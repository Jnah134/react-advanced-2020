import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setpeople] = React.useState(data);
  const handlerClear = () => {
    setpeople([]);
  };

  const removeItems = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setpeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItems(id)}>remove</button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={handlerClear}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
