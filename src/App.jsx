import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Header from "./components/Header"
import Signup from "./pages/Signup"

const App = () => {
  return (
    <div className="h-screen w-screen">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/auth/login' element={<LoginPage />} />
          <Route path='/auth/signup' element={<Signup />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App