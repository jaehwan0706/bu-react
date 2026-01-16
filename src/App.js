import React, { useState } from 'react';


import Header from './Header.js';
import Nav from './Nav.js'
import Article from './Article.js';



function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    {id : 1, title : 'html', body : 'html is ....'},
    {id : 2, title : 'css', body : 'css is ....'},
    {id : 3, title : 'javascript', body : 'javascript is ....'}
  ];

  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title = "Welcome" body = "Hello, Web"/>
  }else if (mode === 'READ') {
    let title, body = null;
    for (let i =0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title = {title} body = {body}/>;
    // content = <Article title = "Welcome" body = "Hello, Read"/>
  }

  const handleHeader = () => {
    setMode('WELCOME');
  }
  return (
    <div>
    {/* <Header title = "React"  onChangeMode = {
        () => {
          // alert('Header');
          setMode('WELCOME');
        }
      } */}
    {/* <Header title = "React" message = "Have a good day"/>   */}
    <Header title = "React"  onChangeMode = {handleHeader}/>

    {/* <Nav topics = {topics}></Nav> */}
    <Nav topics = {topics} onChangeMode = {(id) => {
      // alert(id);
      setMode('READ');
      setId(id);
    }}/>

    {content}
    {/* <Article title = "Welcome" body = "Hello, Web"/> */}
    {/* <Article title = "Hi" body = "Hello, React"/> */}
    </div> 
  );
}

export default App;

//<header></header>-->열고 닫아야 한다 
// 또한 열고 닫고를 한번에 하고 싶으면 <Header/> 이렇게 사용가능
