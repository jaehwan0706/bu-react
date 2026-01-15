import React from 'react';

import UserGreeting from './UserGreeting';
import './index.css'; 


export default function App() {

    const userName ="Good Man"

  return (
    <div>
         <h2>Props 실습</h2>

         <UserGreeting isLoggedIn={true} userName={userName} />
    </div>
  )
}
