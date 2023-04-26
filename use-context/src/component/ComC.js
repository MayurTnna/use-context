import React from "react";
import { data, data1 } from "../App";
const ComC = () => {
  return (
    <div>
      <data.Consumer>
        {(name) => {
          return (
            <div>
              <data1.Consumer>
                {(gender) => {
                  return (
                    <h1>
                      name c:- {name} and gender c:- {gender}
                    </h1>
                  );
                }}
              </data1.Consumer>
            </div>
          );
        }}
      </data.Consumer>
    </div>
  );
};

export default ComC;
