import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { users } from '../data/data'
import '../index.css'

function Users() {
  return (
    <div className='fullNewsScreen'>
      <Navbar/>
      <h1 className='newsTitle'>Yangiliklar...</h1>
      <div className='news'>
      {
        users.map(user => (
          <li key= {user.id}>
            <img src={user?.imageUrl} alt={user?.title}  /> 
            <h2>{user?.title}</h2>
           <div className="dateCategory">
              <h3>{user?.category}</h3>
              <h3>{user?.date}</h3>
            </div>
            <Link to={`/users/${user.id}`}> Batafsil malumot...</Link>
          </li>
        ))
      }
      </div>
    </div>
  )
}

export default Users