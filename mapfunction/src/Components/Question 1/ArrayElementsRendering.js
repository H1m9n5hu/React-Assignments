import React from 'react'

const ArrayElementsRendering = (prop) => {
  return (
    <div className='App'>
        <h1>Render a list elements by using map function</h1>
        <ul className="Row">
          {prop.arr.map((value)=>
            <li>
              {value}
            </li>
          )}
        </ul>
    </div>
  )
}

export default ArrayElementsRendering