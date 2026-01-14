import React from 'react'

export default function Header({title, onChangeMode}) {
  //const {title, message} = props
  return (
    <div>
      <header>
        <h1><a href = "/" onClick = {function(event){
          event.preventDefault();
          onChangeMode();
        }
        }>{title}</a></h1>
    </header>
    </div>
  )
}
//props는 부모한테 있는걸 자식한테 다 줄수 있다. !!!다만 값을 바꿀수는 없다.