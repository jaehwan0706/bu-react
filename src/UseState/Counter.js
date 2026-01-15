import React from 'react'
import {useState} from "react";

export default function Counter() {

    const [value, setValue] = useState(0);
    console.log(value)
    

  return (
    <div>
      {value}
      <button onClick = {() => setValue(value +1)}>+</button>
      <button onClick = {() => setValue(value -1)}>-</button>
      
      <button onClick = {() => {setValue((prev) => prev +1);
                                setValue((prev) => prev + 1)}}>+2</button>
      <button onClick = {() => {setValue((prev) => prev - 1);
                                setValue((prev) => prev - 1)}}>-2</button>
    </div>
  )
}
