import React from 'react';

import { useState } from 'react';
import MyButton from './MyButton';

export default function Control() {
  //부모: 데이터와 로직 담당
  const [count, setCount] = useState(0);

  //1. 데이터를 바꾸는 함수 정의 (리모컨 가능)
  const handleClick = () => {
    // setCount(count + 1);
    setCount( (prev) => prev + 1)
    console.log("자식이 버튼을 눌러서 부모의 숫자가 올라감!");
  }

  return (
    <div style = { {padding: '20px', border: '2px solid blue'} }>
      <h1>부모 컴포넌트</h1>
      <p>현재 카운트 : <strong>{count}</strong></p>

      <hr/>

      {/* 2. 자식에세 함수를 props로 전달 (리모컨 건네주기) */}
      {/* 이름은 달라도 되지만 (onClickHandler), 헷갈리지 않게 잘 짓는것이 중요하다 */}
      <MyButton onClickHandler = {handleClick}/>
    </div>
  );
}
