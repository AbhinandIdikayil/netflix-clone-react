import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

import { userAuth } from '../context/AuthContext'
import userSchema from '../validation/form'

function Signup() {


  const [formData,setFormData] = useState({
    email : '',
    password:''
  })


  const { user, signUp } = userAuth();
  const [error,setError] = useState('')
  const [fireBSError,setFireBSError] = useState('')

  const usenavigate = useNavigate()

  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    try { 
      await userSchema.validate(formData,{abortEarly:false});
      
      await signUp(formData.email, formData.password);
      
      usenavigate('/')
    } catch (error) {
      const newErr ={}
      error.inner.forEach((err) => {
        newErr[err.path] = err.message
      })
      setError(newErr);
      console.log(newErr)      
    }
  }

  const handleChange = (e) =>{ 
    const {value,name} = e.target
    setFormData({
      ...formData,
      [name]:value,
    })
  }

  return (
    <div className='w-full h-screen'>
      <img className='absolute hidden sm:block h-full w-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full top-0 px-4 py-24 z-50 h-full'>
        <div className='max-w-[450px] h-[500px] bg-black/75 text-white mx-auto'>
          <div className='max-w-[320px] mx-auto py-16 '>
            <h1 className='text-3xl font-bold'>Sign up</h1>
            {/* {error ? <p className='p-3 bg-red-400 my-2'> {error.email} </p> : null } */}
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
              {error?.email ? <label htmlFor="" className='text-sm text-red-700 font-bold'> {error?.email} </label> : null }
              <input className='p-3 my-2 bg-gray-600 rounded' type="text"
                placeholder='Email' 
                name='email'
                onChange={handleChange}
                // onChange={(e) => setEmail(e.target.value)}
              />
              {error?.password ? <label className='text-sm text-red-700 font-bold'>{error?.password} </label> : null }
              <input className='p-3 my-2 bg-gray-600 rounded' type="password"
                placeholder='Password' name='password'
                onChange={handleChange}
                // onChange={(e) => setPassword(e.target.value)}
              />
              <button className='bg-red-700 py-3 my-6 rounded font-bold'>
                sign up
              </button>
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p>
                  <input type="checkbox" className='mr-2' />
                  remember me
                </p>
                <p>need help?</p>
              </div>
              <p className='py-4 text-gray-600'>
                <span>Already subscribed to Netflix ?</span> {' '}
                <Link to='/login' className='text-white'>
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup