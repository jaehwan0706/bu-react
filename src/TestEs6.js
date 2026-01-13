import React from 'react'

export default function TestEs6() {

    const foods = ['apple', 'banna', 'graph']

    const list_foods = foods.map( (food) => <li>{food}</li>)

    console.log(list_foods)

  return (
    <div>
      <ul>
        {list_foods}
      </ul>
    </div>
  )
}

