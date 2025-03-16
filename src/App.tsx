import { Route, Routes } from "react-router-dom"
import Dashbord from "./pages/Dashbord"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import UserDetail from "./pages/UserDetail"
import Users from "./pages/Users"
import PrivateRoute from "./routes/PrivateRoute"
import './App.css';
import './index.css'


function App() {
  return (
    <div className="general">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashbord /></PrivateRoute>} />
      </Routes>
    </div>
  )
}

export default App