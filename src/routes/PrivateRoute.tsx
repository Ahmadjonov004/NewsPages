import { ReactNode } from "react"
import { auth } from "../data/auth"
import { Navigate } from "react-router-dom"


function PrivateRoute({children} : {children: ReactNode}) {
   const isAuth = auth() 

  return isAuth ? children : <Navigate to='/login'/>
}

export default PrivateRoute