import { useParams } from "react-router-dom"
import { users } from "../data/data"



function UserDetail() {
  const {id} = useParams()

  const user = users.find(item => item.id === Number(id))

  return (
    <div className="userDetail">
      <img src={user?.imageUrl} alt={user?.title}  />         
      <h2>{user?.title}</h2>
      <p>{user?.description}</p>
      <span>{user?.date} {user?.category}</span>
     
    </div>
  )
}

export default UserDetail