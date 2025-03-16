import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../index.css'

function Login() {
  const [username, setUsername] = useState('ahmadjonov')
  const navigate = useNavigate()


  const handleSubmit = () => {
    if (!username.trim()) return alert("input bo'sh bo'lmasligi kerak")

      if(username.trim() === "ahmadjonov"){
        localStorage.setItem('access', username)
        navigate('/')
      }else {
        alert("Username yoki parol noto'g'ri")
      }
  }

  return (
    <div>
      <input type="text" placeholder="Usernameni kiriting"  
      onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSubmit} className="submitBtn">Submit</button>
    </div>
  )
}

export default Login