import React, { useState, useEffect } from "react";
import { add, subtract, multiply, division } from "../../functions/functions";

function Buttons(props) {
  const { setTotal, numOne, setNumOne, numTwo, setNumTwo, func, setFunc, rand, setRand } =
    props;

    const [random, setRandom] = useState('')

  const handleSubmit = () => {
    if (func === "+") {
      setTotal(add(numOne, numTwo));
    //   setNumOne("");
    //   setNumTwo("");
      setFunc("");
    } else if (func === "-") setTotal(subtract(numOne, numTwo));
    else if (func === "x") setTotal(multiply(numOne, numTwo));
    else setTotal(division(numOne, numTwo));
  };

  const handleNumChange = (num) => {
    if (!func && numOne.length < 9) {
      setNumOne(`${numOne}${num}`);
    }
    if (func && numTwo.length < 9) {
      setNumTwo(`${numTwo}${num}`);
    }
  };

  const handlePosNegChange = () => {
    if (!func && numOne[0] !== '-') setNumOne(`-${numOne}`);
    if(numOne[0] === '-'){
        let temp = numOne.split('')
        temp.shift()
        let final = temp.join('')
        setNumOne(final)
    } 
    if(func && numTwo[0] !== '-')setNumTwo(`-${numTwo}`);
    else {
        let temp = numTwo.split('')
        temp.shift()
        let final = temp.join('')
        setNumTwo(final)
    } 
  };

  const handleDecimalChange = () => {
    if (!func) setNumOne(`${numOne}.`);
    else setNumTwo(`${numTwo}.`);
  };

  const handleClear = () => {
    setTotal(0);
    setNumOne("");
    setNumTwo("");
    setRandom('')
  }

  const handlePercent = () => {
    setTotal(numOne / 100);
  }

  return (
    <div>
      <button onClick={(e) => handleClear()} className="numbers">
        AC
      </button>
      <button onClick={(e) => handlePosNegChange()} className="numbers">
        +/-
      </button>
      <button onClick={(e) => handlePercent()} className="numbers">
        %
      </button>
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
      <button onClick={(e) => handleDecimalChange()} className="numbers">
        .
      </button>
      <button onClick={(e) => handleSubmit()} className="numbers">
        =
      </button>
    </div>
  );
}

export default Buttons;
