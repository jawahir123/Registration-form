import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Home() {
  const [users,setusers]=useState([])
  useEffect(()=>{
    loadUser();

  },[]);
  const loadUser=async()=>{
    const result= await axios.get("http://localhost:8080/users");
    setusers(result.data);
  };
  return (
    <div className='ccontainer'>
      <div className='py-4'>
      <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">username</th>
      <th scope="col">email</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{user.name || 'N/A'}</td> {/* Handle missing data gracefully */}
            <td>{user.username || 'N/A'}</td>
            <td>{user.email || 'N/A'}</td>
            <td>
            </td>
          </tr>
        ))}

  </tbody>
</table>
      </div>
    </div>
  )
}

export default Home