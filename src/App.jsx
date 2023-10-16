import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Header from "./components/Header"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound"
import Doctors from "./pages/Doctors"

const App = () => {
  return (
    <div className="h-screen w-full">
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/auth/login' element={<LoginPage />} />
            <Route path='/auth/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </Router>
      
    </div>
  )
}

export default App