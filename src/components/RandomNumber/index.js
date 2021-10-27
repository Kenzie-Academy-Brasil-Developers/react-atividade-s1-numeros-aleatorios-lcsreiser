import { useState } from "react";
import Button from "../Button";

function RandomNumber() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  return (
    <>
      <h2>{number}</h2>
      <button
        onClick={() => {
          setNumber(Math.floor(Math.random() * 100) + 1);
        }}
      >
        Criar novo número
      </button>
    </>
  );
}

export default RandomNumber;
