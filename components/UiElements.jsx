import { extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import React, { useEffect, useRef, useState } from "react";

export default function Logo() {
  return (<a href="https://viratwiz.com">
    <span className="font-quicksand font-extrabold">
      <span className="text-orange-400 font-extrabold text-100 dark:text-amber-500">
        V
      </span>
      <span className="text-black dark:text-white text-60">irat</span>
      <span className="text-white bg-black pl-1.5 pr-2 text-sm dark:text-black dark:bg-white">
        WIZ
      </span>
    </span>
  </a>);
}
export function Btn({
  color = 'sky', bordr = 'gray',
  padding = 2, border = 1,
  rounded = 5, color1 = 'stale',
  children, ...props }) {
  let class1 =
    "border-" + border + " p-" + padding
    + " rounded-" + rounded + " border-"
    + bordr + "-800 dark:border-"
    + bordr + "-200 transition-colors  hover:bg-"
    + color + "-300 active:bg-" + color
    + "-500 hover:text-white"
  return (
    <button className={class1} {...props}>{children}</button>
  );
}