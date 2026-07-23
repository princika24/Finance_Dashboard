import { createContext, useContext, useState, useEffect } from "react";
import {
    saveToken,
    getToken,
    removeToken,
} from "../features/auth/utils/authStorage";
import { getCurrentUser } from "../features/auth/services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState({
        token: getToken(),
        user: null,
    });

    useEffect(() => {
        const loadUser = async () => {
            const token = getToken();

            if (!token) return;

            try {
                const response = await getCurrentUser();

                setAuth({
                    token,
                    user: response.data,
                });
            } catch (error) {
                console.error("Failed to load user:", error);

                removeToken();

                setAuth({
                    token: null,
                    user: null,
                });
            }
        };

        loadUser();
    }, []);

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
