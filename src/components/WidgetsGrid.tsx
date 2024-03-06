"use client";

import React, { use } from "react";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";
import { IoAirplane } from "react-icons/io5";

export const WidgetsGrid = () => {
  const counter = useAppSelector((state) => state.counterReducer.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        subTitle={"contador"}
        href={"/dashboard/counter"}
        title={`${counter}`}
        label={"contador"}
        icon={<IoAirplane size={50} className="text-blue-500" />}
      />
    </div>
  );
};
