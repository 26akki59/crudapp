import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const User = () => {
    const [user, setUser] = useState ({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
    });
    
    const {id} = useParams();

    useEffect(()=>{
        loadUser();
    }, []);


    const  loadUser   =  async () =>{
        const res = await axios.get(`http://localhost:4000/users/${id}`);
         setUser(res.data);
     }

    



  return (
    <div className='container'>
    <div className='back_btn mt-4 mb-4'>
       <Link to="/" className='btn btn-primary' > Back To Home </Link>
    </div>
      <h1>Users ID : {id} </h1>
    <div className='edit_list'>
      <ul>
        <li>Name : {user.name} </li>
        <li>Username : {user.username} </li>
        <li>Email : {user.email} </li>
        <li>Phone : {user.phone} </li>
        <li>Website : {user.website} </li>
      </ul>
    </div>  

    </div>
  )
}

export default User
