import React from 'react'

export default function ChildComponent({onMessage}) {
  
  const sendMessage = () => {
    onMessage('하위 컴포넌트에서 보낸 메시지입니다.')
  };

  return (
    <div>
      <button onClick = {sendMessage}>메시지 전송</button>
    </div>
  ) ; 
}
