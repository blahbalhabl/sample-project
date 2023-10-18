import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Header from "./components/Header"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound"
import Doctors from "./pages/Doctors"
import RequireAuth from "./components/RequireAuth"
import Appointments from "./pages/Appointments"
import Prescriptions from "./pages/Prescriptions"
import History from "./pages/History"
import Hospitals from "./pages/Hospitals"
import Profile from "./pages/Profile"

const App = () => {
  return (
    <div className="h-screen w-full">
      {/* Handle all Client-Sided Routing */}
      <Router>
        {/* Save Auth Context within the whole App */}
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/auth/login' element={<LoginPage />} />
            <Route path='/auth/signup' element={<Signup />} />
            {/* Authenticated Routes */}
            <Route element={<RequireAuth />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/doctors' element={<Doctors />} />
              <Route path='/appointments' element={<Appointments />}/>
              <Route path='/prescriptions' element={<Prescriptions />}/>
              <Route path='/history' element={<History />}/>
              <Route path="/hospitals" element={<Hospitals />} />
              <Route path='/profile' element={<Profile />}/>
            </Route>
            {/* Render NotFound component for any invalid Route */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App