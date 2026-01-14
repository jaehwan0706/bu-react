import React from 'react'

export default function MyComponent({onChangeMode}) {
    

  return (
    <div>
      <button onClick = {onChangeMode}>버튼</button>
    </div>
  )
}

//이벤트 함수
//onClick , onChange , onSubmit