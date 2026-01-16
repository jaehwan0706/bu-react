import React from 'react'
//import { useState } from 'react';

export default function Hello() {

    let name = "Mike";
    const changeName = () => {
    name = name === "Mike" ? "Ellie" : "Mike";
    console.log(name);
    document.getElementById("name").innerHTML = name;
    }

    //usestate 사용 --> 효율성이 좋다. 
    // const [name, setName] = useState('Mike');
    // const changeName = () => {
    // console.log(name);
    // setName( name === "Mike" ? "Ellie" : "Mike")
    // }

  return (
    <div>
      <h1>State</h1>
      <h2 id="name"> {name} </h2>
      <button onClick={changeName} >Change </button>
    </div>
  )
}
