import React from 'react'

export default function Header(props) {

  console.log(props)
  return (
    <header>
      <h1><a href = "/">{props.title}</a></h1>
    </header>
  )
}
