import React from 'react'

const DisplayArrayList = () => {
  const arr = ["Himanshu", "Lucifer", "Devil", "Jennifer"];
  return (
    <>
        <h1>Array List</h1>
        <div>
            {arr.map((value) =>
                <h2>{value}</h2>
            )}
        </div>
    </>
  )
}

export default DisplayArrayList