import React from "react";
import { useHistory } from "react-router-dom";
import Chart from "./Charts";
const Sample = () => {
  const history = useHistory();

  const goNext = () => {
    history.push("/1");
  };
  return (
    <div>
      <div>
        <p onClick={goNext}>Game</p>
        {/* <Link to={"/1"} component={Chart}>CLick Here</Link> */}
      </div>
      Hello world
    </div>
  );
};

export default Sample;
