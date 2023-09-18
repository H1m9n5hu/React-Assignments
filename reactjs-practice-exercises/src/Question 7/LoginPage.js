import React, { useState } from 'react';
import PhoenixLogo from '../Question 7/PhoenixLogo.png';

const LoginPage = () => {
  const data = [
    {
        name: 'Himanshu',
        username: 'h1m9n5hu',
        password: '12345678'
    },
    {
        name: 'Lucifer',
        username: 'l4c1f3r',
        password: '87654321'
    }
  ];
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [nameOfuser, setNameOfUser] = useState('');
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  }
  const buttonHandler = () => {
    if(username === '' || password === ''){
        setMsg('Please enter username and password!');
        document.querySelector('.errorMsg').style.display = 'block';
    }
    else if(username === data[0].username && password === data[0].password) {
        setNameOfUser(data[0].name);
        document.querySelector('.content').style.display = 'none';
        document.querySelector('.loginContainer').style.display = 'block';
    }
    else if(username === data[1].username && password === data[1].password) {
        setNameOfUser(data[1].name);
        document.querySelector('.content').style.display = 'none';
        document.querySelector('.loginContainer').style.display = 'block';
    }
    else{
        setMsg('You entered invalid username or password. Please try again!');
        document.querySelector('.errorMsg').style.display = 'block';
    }
  }

  return (
    <>
        <div className='container'>
            <div className='logoContainer'>
                <img src={PhoenixLogo} alt='Logo'></img>
            </div>
            <div className='content'>
                <input type='text' onChange={usernameHandler} value={username} placeholder='Username'></input>
                <input type='password' onChange={passwordHandler} value={password} placeholder='password'></input>
                <button type='button' onClick={buttonHandler}>Log in</button>
                <div className='errorMsg'><h2>{msg}</h2></div>
            </div>
            <div className='loginContainer'>
                <h2>Welcome, {nameOfuser}</h2>
            </div>
        </div>
    </>
  )
}

export default LoginPage;