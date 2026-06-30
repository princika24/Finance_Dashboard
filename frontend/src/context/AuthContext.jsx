import { createContext, useContext, useState } from "react";
import {
    saveToken,
    getToken,
    removeToken,
} from "../features/auth/utils/authStorage";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState({
        token: getToken(),
        user: null,
    });

    const login = (token, user) => {
        saveToken(token);
        setAuth({
            token,
            user,
        });
    };

    const logout = () => {
        removeToken();
        setAuth({
            token: null,
            user: null,
        });
    };

    return (
        <AuthContext.Provider
            value={{
                token: auth.token,
                user: auth.user,
                login,
                logout,
                isAuthenticated: !!auth.token,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
