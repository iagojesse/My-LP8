import React, { useState } from "react";
import "./style.css";

function ButtonComponent({ text, onClick }) {
  return (
    <button className="btn-efeito" onClick={onClick}>
      {text}
    </button>
  );
}

function App() {
  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} clicado`);
  };

  return (
    <div>
      <ButtonComponent
        text="btnCurriculo"
        onClick={() => handleButtonClick("btnCurriculo")}
      />
      <ButtonComponent
        text="btnPortfolio"
        onClick={() => handleButtonClick("btnPortfolio")}
      />
      <ButtonComponent
        text="btnContato"
        onClick={() => handleButtonClick("btnContato")}
      />
    </div>
  );
}

export default App;
