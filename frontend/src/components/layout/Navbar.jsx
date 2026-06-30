import { Bell, Moon, Sun } from "lucide-react";
import Button from "../ui/Button/Button";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";


export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const { logout, user } = useAuth();
    return (
        <header
            className="flex items-center justify-between px-8 py-4 bg-white text-gray-900 dark:bg-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold">
                AI Financial Copilot
            </h2>
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleTheme}
                    className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                    {theme === "light" ? <Moon /> : <Sun />}
                </button>

                <Bell className="cursor-pointer" />
                <span>{user?.name}</span>

                <Button variant="outline" onClick={logout}>
                    Logout
                </Button>
            </div>
        </header>

    );

}