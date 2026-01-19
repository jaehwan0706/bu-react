import React from 'react'

export default function Create(props) {
  return (
    <article>
        <h2> Create Article</h2>
        <form onSubmit={
            (event) => {
                event.preventDefault();
                const title = event.target.title.value;
                const body = event.target.body.value;
                props.onCreate(title, body);
            }
        }>
        <p> <input type="text" name="title" placeholder="제목" /></p>
        <p> <textarea type="text" name="body" placeholder="내용" /></p>
        <p> <input type="submit" value="Create"/></p>
        {/* <p> <button type="submit" value="Create">추가</button></p> */}
    </form>
    </article>
  )
}