import React from 'react';

export default function MyButton({onClickHandler}) {
    //자식 : 버튼만 담당
  return (
    <div>
      <button
      onClick = {onClickHandler} //클릭되면 부모가 준 함수를 실행!
      style = { {padding: '10px', fontSize: '1.2rem'} }
      > + 1 증가시키기(자식버튼)</button>
    </div>
  );
}
