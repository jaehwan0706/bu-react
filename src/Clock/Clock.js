import React from 'react';

import { useState } from 'react';

export default function Clock() {

    let initTime = new Date().toLocaleTimeString()
    const [currentTime, setTime] = useState(initTime)
    setInterval(() => 
        setTime(new Date().toLocaleTimeString()
        ),1000)

  return (
    <div>
      <h1>안녕!</h1>
      <h2>현재시간 : {currentTime}</h2>
    </div>
  )
}
