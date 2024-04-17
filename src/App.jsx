import { useState } from 'react'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes >
          <Route path='/' element={<Layout />} >
            <Route path='' element={<Home />} />
          </Route>
      </Routes>
      
    </>
  )
}

export default App
