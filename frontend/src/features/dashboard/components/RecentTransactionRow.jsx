import Badge from "../../../components/ui/Badge/Badge";
import formatDate from "../../../utils/formatDate";

export default function RecentTransactionRow({ transaction }) {
  const isIncome = transaction.type === "income";

  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-medium text-gray-900">{transaction.title}</p>
        <p className="text-sm text-gray-500">{formatDate(transaction.transaction_date)}</p>
      </div>

      <div className="flex flex-col items-end gap-1">
        <p
          className={`font-medium ${
            isIncome ? "text-green-600" : "text-red-600"
          }`}
        >
          {isIncome ? "+" : "-"}₹{transaction.amount.toLocaleString()}
        </p>

        <Badge variant={isIncome ? "success" : "danger"}>
          {isIncome ? "Income" : "Expense"}
        </Badge>
      </div>
    </div>
  );
}