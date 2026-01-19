import React from 'react'
import { FaCheck } from "react-icons/fa";

export default function App() {

    const checked = true;

  return (
    <div>
      Learn React {checked ? <FaCheck/> : " "}
    </div>
  )
}
