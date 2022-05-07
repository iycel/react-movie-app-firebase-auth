import { createContext, useState, useEffect } from "react";
import { userObserver } from "../auth/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        userObserver(setCurrentUser)
    }, [])

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;