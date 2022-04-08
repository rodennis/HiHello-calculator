import React, { useState } from "react";
import { add, subtract, multiply, division } from "../../functions/functions";

function Buttons({ setTotal, total }) {
  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumtwo] = useState("");
  const [func, setFunc] = useState("");

  const handleSubmit = () => {
    if (func === "+") setTotal(add(numOne, numTwo));
    else if (func === "-") setTotal(subtract(numOne, numTwo));
    else if (func === "x") setTotal(multiply(numOne, numTwo));
    else setTotal(division(numOne, numTwo));
    setNumOne("");
    setNumtwo("");
    setFunc("");
  };

  const handleNumChange = (num) => {
    if (!func && numOne.length < 9) {
      setNumOne(`${numOne}${num}`);
      setTotal(numOne)  
    } 
    if (func && numTwo.length < 9){
      setNumtwo(`${numTwo}${num}`);
      setTotal(numTwo);
    }
  };
  
  
  return (
    <div>
      <button className="numbers">
        AC
      </button>
      <button className="numbers">
        +/-
      </button>
      <button className="numbers">%</button>
      <button onClick={(e) => setFunc("÷")} className="numbers">
        ÷
      </button>
      <button onClick={(e) => handleNumChange(7)} className="numbers">
        7
      </button>
      <button onClick={(e) => handleNumChange(8)} className="numbers">
        8
      </button>
      <button onClick={(e) => handleNumChange(9)} className="numbers">
        9
      </button>
      <button onClick={(e) => setFunc("x")} className="numbers">
        x
      </button>
      <button onClick={(e) => handleNumChange(4)} className="numbers">
        4
      </button>
      <button onClick={(e) => handleNumChange(5)} className="numbers">
        5
      </button>
      <button onClick={(e) => handleNumChange(6)} className="numbers">
        6
      </button>
      <button onClick={(e) => setFunc("-")} className="numbers">
        -
      </button>
      <button onClick={(e) => handleNumChange(1)} className="numbers">
        1
      </button>
      <button onClick={(e) => handleNumChange(2)} className="numbers">
        2
      </button>
      <button onClick={(e) => handleNumChange(3)} className="numbers">
        3
      </button>
      <button onClick={(e) => setFunc("+")} className="numbers">
        +
      </button>
      <button
        onClick={(e) => handleNumChange(0)}
        type="button"
        id="zero"
        className="numbers"
      >
        0
      </button>
      <button  className="numbers">
        .
      </button>
      <button onClick={(e) => handleSubmit()} className="numbers">
        =
      </button>
    </div>
  );
}

export default Buttons;
