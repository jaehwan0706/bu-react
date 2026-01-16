import React from 'react'
import { useState } from 'react';

export default function TextInput() {

    const [text, setText] = useState('');
    const handleChange = (ev) => {
        setText(ev.target.value)
    }
  return (
    <div>
        <h1>입력한 글자를 대문자로 변경하기</h1>
      입력 : <input type = "text" value={text.toUpperCase()} 
      onChange={handleChange} 
    />
    </div>
  )
}
//value={text.toUpperCase()} : 입력한 글자를 대문자로 변환해서 보여줌