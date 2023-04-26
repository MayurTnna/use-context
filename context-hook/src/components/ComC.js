import React, { useContext } from "react";
import { data, data1 } from "../App";

const ComC = () => {
  const name = useContext(data);
  const age = useContext(data1);
  return (
    <>
      <h1>
        name:- {name} age :- {age}
      </h1>
    </>
  );
};

export default ComC;
