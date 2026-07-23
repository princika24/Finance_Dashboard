import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button/Button";

export default function DashboardHeader({
    title = "Dashboard",
    subtitle = "Monitor your financial health",
}) {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
                <h1 className="text-3xl font-bold">
                    {title}
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                    {subtitle}
                </p>
            </div>
            <Button
                onClick={() => navigate("/transactions")}
            >
                + Add Transaction
            </Button>
        </div>
    );
}