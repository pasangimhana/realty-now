import React, { useContext } from 'react'
import { AuthContext } from './LoginContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const authContext = useContext(AuthContext)

    if (!authContext) {
        return null
    }

    const { isLoggedIn } = authContext

    return isLoggedIn ? <Navigate to="/" /> : <Outlet />
}

export default ProtectedRoutes
