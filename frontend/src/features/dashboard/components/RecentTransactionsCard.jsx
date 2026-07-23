import { useNavigate } from "react-router-dom";
import Card from "../../../components/ui/Card/Card";
import Loader from "../../../components/ui/Loader/Loader";
import EmptyState from "../../../components/ui/EmptyState/EmptyState";
import Button from "../../../components/ui/Button/Button";
import RecentTransactionRow from "../components/RecentTransactionRow";
import useRecentTransactions from "../hooks/useRecentTransactions";

export default function RecentTransactionsCard() {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useRecentTransactions();

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Transactions</h2>

        <Button onClick={() => navigate("/transactions")}>
          View All →
        </Button>
      </div>

      <div className="space-y-4">
        {isLoading && <Loader />}

        {isError && <EmptyState />}

        {!isLoading &&
          !isError &&
          data?.map((transaction) => (
            <RecentTransactionRow
              key={transaction.id}
              transaction={transaction}
            />
          ))}
      </div>
    </Card>
  );
}