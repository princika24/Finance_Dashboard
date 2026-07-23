import React from "react";
import useDashboardSummary from "../hooks/useDashboardSummary";
import DashboardSummaryCard from "./DashboardSummaryCard";
import Loader from "../../../components/ui/Loader/Loader";
import EmptyState from "../../../components/ui/EmptyState/EmptyState";
import DashboardSkeleton from "./DashboardSkeleton";

const StatsGrid = () => {
    const { data, isLoading, isError} = useDashboardSummary();
    if (isLoading) {
        return < DashboardSkeleton />;
    }

    if (isError) {
        return (
            <EmptyState
                title="Unable to load dashboard."
                description="Please refresh."
            />
        );
    }

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <DashboardSummaryCard
                title="Income"
                value={data.total_income}
                isCurrency={true}
            />

            <DashboardSummaryCard
                title="Expense"
                value={data.total_expense}
                isCurrency={true}
            />

            <DashboardSummaryCard
                title="Balance"
                value={data.balance}
                isCurrency={true}
            />

            <DashboardSummaryCard
                title="Transactions"
                value={data.transaction_count}
            />
        </div>
    );
};
export default StatsGrid;