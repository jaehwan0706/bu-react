import React from 'react'
import { useState } from 'react';
import ChildComponent from './ChildComponent.js';

export default function ParentComponent() {

    const[message, setMessage] = useState(' ');
    const handleMessage = (childMessage) => {
        setMessage(childMessage);
    }

  return (
    <div>
      <ChildComponent onMessage = {handleMessage}/>
      <p> 상위 컴포넌트에서 받은 메시지 : {message}</p>
    </div>
  )
}
