import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { register as registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/ui/Input/Input";
import Button from "../../../components/ui/Button/Button";

import { registerSchema } from "../validation/authSchemas";

export default function RegisterForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const onSubmit =async (data) => {
        setLoading(true);
        try {
            await registerUser({
                name: data.name,
                email: data.email,
                password: data.password,
            });

            toast.success("Account created successfully!");
            navigate("/login");
        } catch (error) {
            toast.error(
                error.response?.data?.detail ||
                "Registration failed"
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
                label="Full Name"
                placeholder="John Doe"
                error={errors.name?.message}
                {...register("name")}
            />

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

            <Input
                type="password"
                label="Confirm Password"
                placeholder="Confirm Password"
                error={errors.confirmPassword?.message}
                {...register("confirmPassword")}
            />

            <Button
                loading={loading}
                type="submit"
                className="w-full"
            >
                Create an account
            </Button>

            <p className="text-center text-sm">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="font-semibold text-blue-600"
                >
                    Login
                </Link>
            </p>
        </form>
    );
}