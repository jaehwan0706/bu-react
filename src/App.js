import React from 'react';
import './App.css';

import Header from './Header.js';
import Nav from './Nav.js'
import Article from './Article.js';

function App() {
  return (
    <div>
    <Header/>
    <Header/>
    <Header/> 

    <Nav/>
    <Nav/>

    <Article/>
    <Article/>
    </div>
  );
}

export default App;

//<header></header>-->열고 닫아야 한다 
// 또한 열고 닫고를 한번에 하고 싶으면 <Header/> 이렇게 사용가능
