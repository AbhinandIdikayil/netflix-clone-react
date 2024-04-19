import React from 'react'
import { Navigate } from 'react-router-dom'
import { userAuth } from '../context/AuthContext'

function ProtectedRoute({children}) {
    const {user} = userAuth()
    console.log(user)
    if(!user) {
        return <Navigate to='/' />
    } else {
        return children
    }
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute