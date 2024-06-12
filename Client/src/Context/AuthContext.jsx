import { createContext, useState, useCallback } from "react";
import { baseUrl } from "../utils/servives";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [registerError, setRegisterError] = useState(null);
    const [isrRegisterLoading, setRegisterLoading] = useState(false);
    const [registerInfo, setRegisterInfo] = useState({ name: "", email: "", password: "" });

    const updateResInfo = useCallback((info) => {
        setRegisterInfo(info)
    }, [],
    );

    const registerUser = useCallback(async (e) => {
        e.preventDefault()
        setRegisterLoading(true)
        setRegisterError(null)
        const response = await postRequest(`${baseUrl}/users/register`, JSON.stringify(registerInfo))

        setRegisterLoading(false)
        if (response.error) {
            return setRegisterError(response)
        }
        localStorage.setItem("User", JSON.stringify(response))
        setUser(response)
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            registerInfo,
            updateResInfo,
            registerUser,
            registerError,
            isrRegisterLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}