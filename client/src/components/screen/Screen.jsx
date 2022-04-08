import React from "react";

function Screen({ total }) {
  let largest = 999999999
  return (
    <div className="screen">
      <p className={total > largest ? 'long-num' : 'short-num'}>{total === "" ? "0" : total}</p>
    </div>
  );
}

export default Screen;
