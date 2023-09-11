import React from 'react'

const UserInfo = (prop) => {
  return (
    <div className='app'>
        <h1>Short Introduction</h1>
        {prop.obj.map((value) =>
            <div className='card'>
                <h2>{value.name}<br/></h2>
                <img src={value.profilePicture} alt='Profile Img'></img>
                <p>{value.bio}</p>
            </div>
        )}
    </div>
  )
}

export default UserInfo