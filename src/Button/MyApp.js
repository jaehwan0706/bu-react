import React from 'react'
import MyComponent from './MyComponent'

export default function MyApp() {
    const handleClick = () => alert("버튼이 눌렸습니다.")

  return (
    <div>
      <MyComponent onChangeMode = {handleClick}/>
    </div>
  )
}
