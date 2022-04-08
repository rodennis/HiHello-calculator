import React from "react";

function Screen({total}) {
  return (
    <div className="screen">
        <p>{total === '' ? '0' : total}</p>
    </div>
  );
}

export default Screen;
