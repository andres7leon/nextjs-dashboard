'use client';

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/cunterSlice";
import { useEffect } from "react";

interface Props {
  value?: number;
}

const getApiCounter = async () => {
  const data = await fetch("/api/counter").then(res => res.json());
  return data;
};

export const CartCounter = ({value = 100}: Props) => {

  const count = useAppSelector((state) => state.counterReducer.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApiCounter().then(data => {
      dispatch( initCounterState(data.count) );
    });
  }, [dispatch, value]);
  

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          onClick={() => dispatch( addOne() )}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          + 1
        </button>
        <button
          onClick={() => dispatch( substractOne() )}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          - 1
        </button>
      </div>
    </>
  );
};
