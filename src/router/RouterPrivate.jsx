import { Navigate, useLocation } from "react-router-dom"

export const RouterPrivate = ({children}) =>{
    const location = useLocation()
    return location?.state?.logged ? children : <Navigate to="/login" />
}