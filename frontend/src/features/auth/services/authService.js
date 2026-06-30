import api from "../../../services/api";
import { ENDPOINTS } from "../../../services/endpoints";

export const register = (data) =>
    api.post(
        ENDPOINTS.REGISTER,
        data
    );

export const login = (credentials) => {
    const form = new URLSearchParams();

    form.append("username", credentials.email);
    form.append("password", credentials.password);

    return api.post(
        ENDPOINTS.LOGIN,
        form,
        {
            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded",
            },
        }
    );
};

export const getCurrentUser = () => {
    return api.get("/users/me");
};