import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Header from "./components/Header"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound"

const App = () => {
  const [auth, setAuth] = useState(null);

  return (
    <div className="h-screen w-full">
      <Router>
      <Header auth={auth} setAuth={setAuth} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/auth/login' element={<LoginPage setAuth={setAuth} />} />
          <Route path='/auth/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App