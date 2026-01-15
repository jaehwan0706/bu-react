import React from 'react'
import {useState} from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Counter() {

    const [value, setValue] = useState(0);

  return (
    <div>
        <FaShoppingCart/>
      <h1>{value}</h1>
      <button onClick = {() => setValue((prev) => prev + 1)}>+</button>
      <button onClick = {() => setValue((prev) => prev - 1)}>-</button>
    </div>
  )
}
