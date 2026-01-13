import React from 'react'

export default function Article(props) {

  const {title, body} = props;
  console.log(props)
  return (
    <article>
      <h2>{title}</h2>
      {body}
      </article>
  )
}
 