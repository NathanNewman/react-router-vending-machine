import React from "react";
import { useHistory } from "react-router-dom";

const VendingMachine = () => {
  const history = useHistory();
  const handleClick = (route) => {
    history.push(route);
  };
  return (
    <div>
      <img
        src="https://pepsigvl.com/wp-content/uploads/2016/12/3B-Pepsi-HVV-1.jpg"
        alt="Vending Machine"
      />
      <button onClick={() => handleClick("/pepsi")}>Pepsi</button>
      <button onClick={() => handleClick("/mountain-dew")}>Mountain Dew</button>
      <button onClick={() => handleClick("/dasani")}>Dasani</button>
    </div>
  );
};

export default VendingMachine;
