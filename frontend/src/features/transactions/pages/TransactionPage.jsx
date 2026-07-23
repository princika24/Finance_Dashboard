import { useState } from "react";
import Select from "../../../components/ui/Select/Select";
import Button from "../../../components/ui/Button/Button"
import Loader from "../../../components/ui/Loader/Loader";
import EmptyState from "../../../components/ui/EmptyState/EmptyState";

import TransactionTable from "../components/TransactionTable";
import { useTransactions } from "../hooks/useTransactions";
import TransactionModal from "../components/TransactionModal";
import {useCreateTransaction} from "../hooks/useCreateTransaction"

export default function TransactionsPage() {
    const [open, setOpen] = useState(false);
    const createMutation = useCreateTransaction();
    const { data, isLoading} = useTransactions();

    if (isLoading) {
        return <Loader />;
    }

    const transactions = data?.data?.items || [];

    if (transactions.length === 0) {
        return (
            <EmptyState
                title="No Transactions"
                description="Create your first transaction."
            />
        );
    }

    return (
        <div className="flex justify-between items-center">
            <div>

                <h1 className="text-3xl font-bold">
                    Transactions
                </h1>

                <p className="text-gray-500 dark:text-gray-400">
                    Manage your finances
                </p>

            </div>

            <Button
                onClick={() => setOpen(true)}
            >
                + Add Transaction
            </Button>

            <TransactionModal

                open={open}
                onClose={() => setOpen(false)}
                loading={createMutation.isPending}
                onSubmit={async (data) => {
                    await createMutation.mutateAsync(data);
                    setOpen(false);
                }}

            />
            <TransactionTable
                data={ data?.data?.items || [] }
            />

    </div>
    );
}