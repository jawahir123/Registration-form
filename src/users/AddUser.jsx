import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function AddUser() {
  let navigate=useNavigate()
  const [user,setuser]= useState({
    name:"",
    username:"",
    email:""
  })
  const {name,username, email}=user
  const OnInPutChange=(e)=>{
    setuser({...user,[e.target.name]:e.target.value})
  };
  const onsubmit= async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/user",user)
    navigate("/")


  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Register User</h2>
            <form onSubmit={onsubmit}>
            <div className='mb-3'>
             <label htmlFor="Name" className='form-Label'>
                Name
              </label>
              <input type={"text"}
              className='form-control'
              placeholder='Enter your name'
              name='name'
              onChange={OnInPutChange}
               />
            </div>
            <div className='mb-3'>
             <label htmlFor="username" className='form-LabeL'>
                username
              </label>
              <input type={"text"}
              className='form-control'
              placeholder='Enter your username'
              name='username'
              onChange={OnInPutChange}
               />
            </div>
            <div className='mb-3'>
             <label htmlFor="email" className='form-LabeL'>
                E-mail
              </label>
              <input type={"text"}
              className='form-control'
              placeholder='Enter your E-mail address'
              name='email'
              onChange={OnInPutChange}
               />
            </div>
            <button type='submit' className='btn btn-outline-primary'>submit</button>
            <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
            </form>
        </div>

      </div>

    </div>
  )
}

export default AddUser