import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { login as loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import Button from "../../../components/ui/Button/Button";
import Input from "../../../components/ui/Input/Input";
import getErrorMessage from "../../../utils/getErrorMessage";
import { loginSchema } from "../validation/authSchemas";
import { getCurrentUser } from "../services/authService";
import { saveToken } from "../utils/authStorage";

export default function LoginForm() {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });
    const navigate = useNavigate();

    const { login } = useAuth();

    const onSubmit = async (formData) => {
        setLoading(true);
        try {
            const response = await loginUser(formData);
            saveToken(response.data.access_token);
            const userResponse = await getCurrentUser();
            await login(
                response.data.access_token,
                userResponse.data
            );

            toast.success("Welcome back!");
            reset();
            navigate("/");

        } catch (error) {
            console.log(error);
            console.log(error.response);
            console.log(error.response?.data);

            toast.error(
                error.response?.data?.detail ||
                error.message
            );
        }
        finally{
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
        >
            <Input
                label="Email"
                placeholder="john@email.com"
                error={errors.email?.message}
                {...register("email")}
            />

            <Input
                type="password"
                label="Password"
                placeholder="Password"
                error={errors.password?.message}
                {...register("password")}
            />

            <Button
                loading={loading}
                type="submit"
                className="w-full"
            >
               Login
            </Button>
            <p className="text-center text-sm">
                Don't have an account?{" "}
                <Link
                    to="/register"
                    className="font-semibold text-blue-600"
                >
                    Register
                </Link>
            </p>
        </form>
    );
}