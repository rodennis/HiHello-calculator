import React, { useState } from "react";

function Screen({total}) {
  return (
    <div className="screen">
        <p>{total}</p>
    </div>
  );
}

export default Screen;
