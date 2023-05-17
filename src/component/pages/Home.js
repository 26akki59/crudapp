import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Home = () => {
const [users, setUsers] = useState([]);

useEffect(()=>{
    loadeUser();
},[]);

const loadeUser = async () =>{
   const result = await axios.get("http://localhost:4000/users");
    setUsers(result.data);
}

const deleteUser = async (id) => {
   await axios.delete(`http://localhost:4000/users/${id}`);
  loadeUser();
}

  return (
    <div className='container'>
      <h2>Home page </h2>
      <table className="table">
  <thead>
    <tr className='bg-dark text-white'>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User name</th>
      <th scope="col">Emails</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>{
            return(
                <tr>
                    <th scope='row'>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                        <div className='d-flex justifyd-flex justify-content-around'>
                         <Link className='btn btn-primary' to={`/user/${user.id}`} ><i class="fa fa-eye" aria-hidden="true"></i></Link>
                         <Link className=' btn btn-primary ' to={`/user/edit/${user.id}`} ><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                         <Link className='btn btn-danger' onClick={() => deleteUser(user.id)} ><i class="fa fa-trash" aria-hidden="true"></i></Link>
                        </div>
                    </td>
                </tr>
            )
        })
    }







 
   
   
  </tbody>
</table>
     
    </div>
  )
}

export default Home
