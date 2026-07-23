import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend,} from "recharts";

import Card from "../../../components/ui/Card/Card";
import Loader from "../../../components/ui/Loader/Loader";
import EmptyState from "../../../components/ui/EmptyState/EmptyState";
import useCategorySummary from "../hooks/useCategorySummary";
import formatCurrency from "../../../utils/formatCurrency"

const COLORS = [
    "#22c55e",
    "#ef4444",
    "#3b82f6",
    "#f59e0b",
    "#8b5cf6",
    "#06b6d4",
];

export default function CategoryPieChart() {
    const {
        data,
        isLoading,
        isError,
    } = useCategorySummary();

    if (isLoading) {
        return <Loader />;
    }

    if (isError || !data) {
        return <EmptyState />;
    }

    return (
        <Card>
        <div className="w-full h-[420px] flex justify-center items-center">
            <ResponsiveContainer
                width={500}
                height={320}
            >
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="amount"
                        nameKey="category"
                        outerRadius={100}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>

                    <Tooltip
                        formatter={(value, name) => [formatCurrency(value), name]}
                    />

                    <Legend
                        layout="vertical"
                        align="right"
                        verticalAlign="middle"
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </Card>
    );
}