import React from 'react';
import './App.css';

import Header from './Header.js';
import Nav from './Nav.js'
import Article from './Article.js';



function App_2() {
  const topics = [
    {id : 1, title : 'html', body : 'html is ....'},
    {id : 2, title : 'css', body : 'css is ....'},
    {id : 3, title : 'javascript', body : 'javascript is ....'}
  ]
  
  return (
    <div>
    <Header title = "Web"/>
    <Header title = "React"/>  

    <Nav topics = {topics}></Nav>
    <Nav/>

    <Article title = "Welcome" body = "Hello, Web"/>
    <Article title = "Hi" body = "Hello, React"/>

    
    
    </div>

    
  );
}

export default App_2;

//<header></header>-->열고 닫아야 한다 
// 또한 열고 닫고를 한번에 하고 싶으면 <Header/> 이렇게 사용가능
