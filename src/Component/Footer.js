import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear(); 
  return (
    <div>
        <footer> 
            {/* JSX 안에서 바로 써도 됩니다 */} 
            <p>&copy; {currentYear} My Company. All rights reserved.</p>                    
        </footer> 
    </div>
  )
}
