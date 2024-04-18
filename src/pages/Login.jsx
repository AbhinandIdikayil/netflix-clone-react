import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userAuth } from '../context/AuthContext'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, logIn } = userAuth();

  const usenavigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log('hai-from login')
      await logIn(email, password);
      console.log('hai-from login')
      usenavigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='w-full h-screen'>
      <img className='absolute hidden sm:block h-full w-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full top-0 px-4 py-24 z-50 h-full'>
        <div className='max-w-[450px] h-[500px] bg-black/75 text-white mx-auto'>
          <div className='max-w-[320px] mx-auto py-16 '>
            <h1 className='text-3xl font-bold'>Sign in</h1>
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='p-3 my-2 bg-gray-600 rounded' type="email" placeholder='Email'
                autoComplete='email'
              />
              <input className='p-3 my-2 bg-gray-600 rounded' type="password"
                placeholder='Password' name='password'
                autoComplete='current-password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className='bg-red-700 py-3 my-6 rounded font-bold'>
                sign in
              </button>
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p>
                  <input type="checkbox" className='mr-2' />
                  remember me
                </p>
                <p>need help?</p>
              </div>
              <p className='py-4 text-gray-600'>
                <span>new to Netflix ?</span> {' '}
                <Link to='/signup' className='text-white'>
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login