import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <div className='flex items-center justify-between sm:px-8 px-3 sm:py-4 py-2 z-[100] w-full absolute'>
            <Link to='/'>
            <h1 className='text-red-600 sm:text-4xl text-2xl font-bold'>NETFLIX</h1>
            </Link>
            
            <div>
                <button className='text-white sm:pr-4 pr-2 font-bold'> Sign in</button>
                <button className='bg-red-600 sm:px-6 px-3  sm:py-2 py-0.5 cursor-pointer sm:text-md text-sm text-white rounded font-bold'> Sign up</button>
            </div>
        </div>
    )
}

export default Navbar