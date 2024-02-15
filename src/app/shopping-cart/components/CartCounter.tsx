'use client';

import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({value = 100}: Props) => {
  const [counter, setCounter] = useState(value);

  const toggleCounter = (value: number) => {
    setCounter(value);
  }

  return (
    <>
      <span className="text-9xl">{counter}</span>

      <div className="flex">
        <button
          onClick={() => toggleCounter(counter + 1)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          + 1
        </button>
        <button
          onClick={() => toggleCounter(counter - 1)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          - 1
        </button>
      </div>
    </>
  );
};
