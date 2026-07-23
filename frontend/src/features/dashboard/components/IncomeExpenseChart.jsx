import { ResponsiveContainer, LineChart, CartesianGrid, Line, XAxis, YAxis, Tooltip, Legend,} from "recharts";

import Card from "../../../components/ui/Card/Card";
import Loader from "../../../components/ui/Loader/Loader";
import EmptyState from "../../../components/ui/EmptyState/EmptyState";
import useMonthlySummary from "../hooks/useMonthlySummary";
import DashboardSkeleton from "./DashboardSkeleton";

export default function IncomeExpenseChart() {
    const {
        data,
        isLoading,
        isError,
    } = useMonthlySummary();

    if (isLoading) {
        return <DashboardSkeleton />;
    }

    if (isError || !data) {
        return <EmptyState />;
    }

    return (
        <Card>
            <div className="w-full">
                <ResponsiveContainer
                    width="100%"
                    height={320}
                >
                    <LineChart data={data}>
                        <CartesianGrid />

                        <XAxis dataKey="month"/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="income"
                            stroke="#16a34a"
                        />

                        <Line
                            type="monotone"
                            dataKey="expense"
                            stroke="#dc2626"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}