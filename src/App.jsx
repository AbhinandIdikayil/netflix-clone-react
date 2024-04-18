import { useState } from 'react'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { AuthContextProvider } from './context/AuthContext'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthContextProvider >
        <Routes >
          <Route path='/' element={<Layout />} >
            <Route path='' element={<Home />} />
          </Route>
        </Routes>
      </AuthContextProvider>


    </>
  )
}

export default App
