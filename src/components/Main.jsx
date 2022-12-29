import React from "react";
import { useState } from "react";

const Main = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count > 0) setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="main">
      <div className="container main text-center ">
        <div className="display pt-0 mt-0">
          <h1 className="input">{count}</h1>
        </div>
        <div className="buttons mt-5">
          <button
            type="button"
            className="btn-red"
            onClick={() => handleDecrease()}
          >
            {" "}
            -
          </button>
          <button
            type="button"
            className=" btn-reset mx-3"
            onClick={() => handleReset()}
          >
            {" "}
            Reset
          </button>
          <button
            type="button"
            className="btn-green"
            onClick={() => handleIncrease()}
          >
            {" "}
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
