import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
    });

    useEffect(()=>{
    loadUser();
    },[]);

    const {name, username, email, phone, website} = user;

    const onInputChange = (e) =>{
        console.log(e.target.value);
        setUser({...user, [e.target.name] : e.target.value })
       }
       
   
       const onSubmit = async (e) =>{
           e.preventDefault();
           await axios.put(`http://localhost:4000/users/${id}`, user);
           navigate('/');
       }

       const loadUser = async  () =>{
        const result = await axios.get(`http://localhost:4000/users/${id}`);
        setUser(result.data);
       }
  return (
    <div className='container'>
      <h1>Edit User</h1>
      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group mt-4'>
          <input
          type='text'
          placeholder='Enter your Name'
          className='form-control'
          name='name'
          value={name}
          onChange={ e => onInputChange(e)}
          />
        </div>
        <div className='form-group mt-4'>
          <input
          type='text'
          placeholder='Enter your User Name'
          className='form-control'
          name='username'
          value={username}
          onChange={ e => onInputChange(e)}
          />
        </div>
        <div className='form-group mt-4'>
          <input
          type='text'
          placeholder='Enter your Email'
          className='form-control'
          name='email'
          value={email}
          onChange={ e => onInputChange(e)}
          />
        </div>
        <div className='form-group mt-4'>
          <input
          type='text'
          placeholder='Enter your Phone Number'
          className='form-control'
          name='phone'
          value={phone}
          onChange={ e => onInputChange(e)}
          />
        </div>
        <div className='form-group mt-4'>
          <input
          type='text'
          placeholder='Enter your Website Name'
          className='form-control'
          name='website'
          value={website}
          onChange={ e => onInputChange(e)}
          />
        </div>
        <div className='mt-4'>
            <button type='submit' className='btn btn-success'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Edit
