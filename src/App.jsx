import { useState } from 'react'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AuthContextProvider  from './context/AuthContext'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Account from './pages/Account'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthContextProvider >
        <Routes >
          <Route path='/' element={<Layout />} >
            <Route path='' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/singup' element={<Signup />} />
            <Route path='/account' element={<Account />} />
          </Route>
        </Routes>
      </AuthContextProvider>


    </>
  )
}

export default App
