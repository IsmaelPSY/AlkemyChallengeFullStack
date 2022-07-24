import { useState } from 'react'
import './styles/app.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Public/Lading/Landing'
import Login from './pages/Public/Login/Login'
import Singin from './pages/Public/Singin/Singin'
import MyProfile from './pages/Private/MyProfile/MyProfile'
import Operations from './pages/Private/Operations/Operations'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
              {/* PUBLIC ROUTES */}
              <Route exact path="/" element={<Landing/>} />
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/singin" element={<Singin/>} />
              {/* PRIVATE ROUTES */}
              <Route exact path="/users/:uuid" element={<MyProfile/>} />
              <Route exact path="/operations" element={<Operations/>} />
    </Routes>
  )
}

export default App
