// src/ui/DiceRoller.tsx
import React from "react";

function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function rollDice(
  numDice: number,
  diceSides: number,
  modifier: number
): number {
  let result = 0;

  for (let i = 0; i < numDice; i++) {
    result += randomNumber(1, diceSides);
  }

  return result + modifier;
}

export default function DiceRoller(): JSX.Element {
  const [numDice, setNumDice] = React.useState<number>(1);
  const [diceSides, setDiceSides] = React.useState<number>(20);
  const [modifier, setModifier] = React.useState<number>(0);
  const [result, setResult] = React.useState<number | null>(null);

  return (
    <>
      <div className="DiceRoller__container">
        <div className="text-4xl text-red-500">Test Tailwind</div>
        <input
          type="number"
          value={numDice}
          onChange={(e) => setNumDice(parseInt(e.target.value, 10) || 1)}
        />{" "}
        D{" "}
        <input
          type="number"
          value={diceSides}
          onChange={(e) => setDiceSides(parseInt(e.target.value, 10) || 20)}
        />{" "}
        +{" "}
        <input
          type="number"
          value={modifier}
          onChange={(e) => setModifier(parseInt(e.target.value, 10) || 0)}
        />
      </div>
      <h4>{result !== null ? `Result: ${result}` : "Roll the dice!"}</h4>
      <button onClick={() => setResult(rollDice(numDice, diceSides, modifier))}>
        Roll!
      </button>
    </>
  );
}
