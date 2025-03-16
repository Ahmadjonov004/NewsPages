import { NavLink } from "react-router-dom"
import './Navbar.css'
import { auth, logout } from "../data/auth"

function Navbar() {
    const isAuth: string | null = auth()


  return (
    <div className="navbar">
        <NavLink className={({isActive}) => isActive ? 'active' : ''} to='/'>Home</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : ''} to='/users'>Yangiliklar</NavLink>
        {isAuth === 'ahmadjonov' 
        ? <NavLink className={({isActive}) => isActive ? 'active' : ''} to='Dashboard'>Dashboard</NavLink> 
        : <NavLink to='/login'>Login</NavLink>}
        <button className="logOutBtn" onClick={(logout)}>Log Out</button>
    </div>
  )
}

export default Navbar