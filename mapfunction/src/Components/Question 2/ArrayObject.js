import React from 'react'

const ArrayObject = (prop) => {
  return (
    <div className='app'>
        <h2>Array Objects</h2>
        <table>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
            {prop.arr.map((value)=>
                <tr>
                  <td>{value.name}</td>
                  <td>{value.age}</td>
                  <td>{value.email}</td>
                </tr>
            )}
        </table>
    </div>
  )
}

export default ArrayObject