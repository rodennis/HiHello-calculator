import React, { useState, useEffect } from "react";
import Buttons from "../buttons/Buttons";
import Screen from "../screen/Screen";
function CalculatorBody() {
  const [total, setTotal] = useState(0);
  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumtwo] = useState("");
  const [func, setFunc] = useState("");

  useEffect(() => {
    if (!func && numOne) setTotal(numOne);
    if (func && numTwo) setTotal(numTwo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numOne, numTwo]);

  return (
    <div className="calculator-body">
      <Screen total={total} />
      <Buttons
        setTotal={setTotal}
        total={total}
        numOne={numOne}
        setNumOne={setNumOne}
        numTwo={numTwo}
        setNumTwo={setNumtwo}
        func={func}
        setFunc={setFunc}
      />
    </div>
  );
}

export default CalculatorBody;
