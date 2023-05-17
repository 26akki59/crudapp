import React from 'react'

const ContactUs = () => {
  return (
    <div className='container'>
      <h2>Contact Us</h2>
      <form>
        <div className='form-group'>
        <label>Your Email</label>
          <input type="text" 
          className='form-control'
           />
        </div>
        <div className='form-group'>
        <label>Your Password</label>
          <input type="text" 
          className='form-control'
           />
        </div>
        <div className='mt-4'>
            <button  type='submit' className='btn btn-primary'> Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ContactUs
