import { useState } from 'react'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AuthContextProvider from './context/AuthContext'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import Account from './pages/Account'
import './index.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthContextProvider >
        <Routes >
          {/* hi how are you */}
          <Route path='/' element={<Layout />} >
            <Route path='' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/account' element={
              <ProtectedRoute >
                <Account />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </AuthContextProvider>


    </>
  )
}

export default App
