import React from 'react'
import './UserGreeting.css'

//{isLoggedIn, userName} = props
export default function UserGreeting({isLoggedIn, userName}) {

    // if (isLoggedIn) {
    //     return (
    //     <div className="card success">
    //     <h1>환영합니다. {userName}님! 👋</h1>
    //     </div>
    //     );
    // }
    //     return (
    //     <div className="card warning">
    //     <h1>로그인이 필요합니다. 🔒</h1>
    //     </div>
    //     );
    // }

  return (
    <div className="card">
        {isLoggedIn ?
            <h1 className="success">환영합니다, {userName}님! 👋</h1>
            : <h1 className="warning">로그인이 필요합니다. 🔒</h1> 
        }
    </div>
  )
}
