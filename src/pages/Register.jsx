import React, { useState } from 'react';
import {Input} from 'antd';
import Logo from '../assets/Logo.svg'

function Register() {

  const [newUser , setNewUser] = useState({
    'name' : '' ,
    'email' : '' ,
    'password' : '' ,
    'avatar' : '' ,
    'role' : ''
  })

  function handle(e) {
    const newData = { ...newUser };
    newData[e.target.id] = e.target.value;
    setNewUser(newData);
    console.log(newUser);
  } 

  function PostUser () {
    axios.post('https://api.escuelajs.co/api/v1/users' , newUser).then(data => {console.log(data);
    }).catch(err => {console.log(err);
    })
  }

  return (
    <div className='login d-flex w-100'>
      <div className="left w-75"></div>
      <div className="right p-5">
        <div className="logo d-flex w-100 gap-2 align-items-center pt-5">
          <img className='logo' src={Logo} alt="" />
          <p className='m-0 fw-bold'>UI Unicorn</p>
        </div>
        <div className="title pt-5">
          <p className="m-0 mt-5 fw-bold fs-5">Sign up</p>
        </div>
        <form action="login" className='w-100 pt-4 d-flex flex-column gap-4'>
            <div className="name w-50 gap-2 d-flex flex-column">
              <label className='login-label fw-light ms-1' htmlFor="login">Name</label>
              <Input onChange={(e)=>handle(e)} id='name' value={newUser.name} className='login-input' placeholder='Enter your name' />
            </div>
          <div className="birthdays d-flex align-items-center justify-content-between gap-3">
            <div className="birthday w-50 gap-2 d-flex flex-column">
              <label className='login-label fw-light ms-1' htmlFor="login">Role</label>
              <Input onChange={(e)=>handle(e)} id='role' value={newUser.role} className='login-input' placeholder='Role' />
            </div>
            <div className="avatar d-flex flex-column gap-2">
              <label className='login-label fw-light ms-1' htmlFor="">Upload avatar</label>
              <Input onChange={(e)=>handle(e)} id='avatar' value={newUser.avatar} placeholder='Paste your avatar url' className='login-input' />
            </div>
          </div>
          <div className="info d-flex align-items-center justify-content-center gap-3">
            <div className="username w-100 gap-2 d-flex flex-column">
              <label className='login-label fw-light ms-1' htmlFor="login">Email</label>
              <Input onChange={(e)=>handle(e)} id='email' value={newUser.email} type='email' className='login-input' placeholder='Email or phone number' />
            </div>
            <div className="password w-100 gap-2 d-flex flex-column">
              <label htmlFor="password" className="login-label fw-light ms-1">Password</label>
              <Input.Password onChange={(e)=>handle(e)} id='password' value={newUser.password} className='login-input' placeholder="Enter password" />
            </div>
          </div>
          <button onClick={()=>PostUser()} className='btn btn-primary'>Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Register;