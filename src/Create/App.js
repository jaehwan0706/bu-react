import React from 'react'
import { useState } from 'react';

export default function App() {

    const [names, setNames] = useState(['alice', 'bob'])
    const [input, setInput] = useState("")

    const handleClick = () => {
   
    // const prev = names
    // setNames ([input, ...prev])
    setNames((prev) => [input,...prev])  
    //prev를 사용하면 ['alice', 'bob'] 이렇게 에서 추가할때마다 alice사라지고 tom이 생긴다. ex) ['alice', 'bob'] -> ['tom'] 
    //.....prev를 사용하면 기존값을 복사해서 사용한다.  ex) ['alice', 'bob'] -> ['tom', 'alice', 'bob'
    }

  return (
    <div className="App">
      <input value={input} onChange={(ev)=>setInput(ev.target.value)}/>
      <button onClick={handleClick}>Upload</button>
      <div>
      {
        //  names.map( (n)=> {
        //     return <p>{n}</p>
        // })
         names.map( (n)=> {
            return <p>{n.toLocaleUpperCase()}</p>
        }) //모든 글자를 대문자로 바꿔주는 함수(toLocaleUpperCase())
      }
      </div>
    </div>
  );
}
