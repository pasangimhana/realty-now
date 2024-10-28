import React, { useState, createContext, ReactNode } from 'react'

interface AuthContextType {
    isLoggedIn: boolean
    authenticate: () => void
}


export const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface LoginContextProps {
    children: ReactNode
}

export const LoginContext = ({ children }: LoginContextProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const authenticate = () => {
        setIsLoggedIn(true)
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, authenticate }}>
            {children}
        </AuthContext.Provider>
    )
}
