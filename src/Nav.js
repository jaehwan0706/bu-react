import React from 'react'

export default function Nav({topics, onChangeMode}) {
  // const lis = []
  // for (let i = 0; i < topics.length; i++)
  // {
  //   let t = topics[i]
  //   lis.push(<li key = {t.id}><a href = {'/read/' + t.id}>{t.title}</a></li>)
  // }

//   const lis = []
//   for (let i = 0; i < topics.length; i++)
//   {
//   const lis = topics.map(
//     (t) => <li key = {t.id}><a id = {t.id} href = "/read/{t.id}">{t.title}</a></li>
//   )
// }

//  const lis = []
//   for (let i = 0; i < topics.length; i++)
//   {
//     let t = topics[i]
//     lis.push(<li key = {t.id}><a href = {'/read/' + t.id}
//         onClick = {function(event){
//             event.preventDefault();
//             console.log(event.target)
//             onChangeMode(event.target.id);
//         }}>{t.title}</a></li>)
//   }

  const lis = topics.map((t) =>
    <li><a id = {t.id} href = "/read/{t.id}"
      onClick = {
        (ev) => {
          ev.preventDefault();
          onChangeMode(Number(ev.target.id))}
      }>{t.title}</a>
    </li>)

  return (
    <nav>
      <ol>
        {lis}
        {/* <li><a href = "/read/{topics[0].id}">{topics[0].title}</a></li>
        <li><a href = "/read/2">css</a></li>
        <li><a href = "/read/3">js</a></li>  */}
      </ol>
    </nav>
  )
}
