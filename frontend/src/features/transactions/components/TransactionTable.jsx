import Table from "../../../components/ui/Table/Table";
import Badge from "../../../components/ui/Badge/Badge";
const columns = [
    {
        key: "title",
        label: "Title",
    },
    {
        key: "category",
        label: "Category",
    },
    {
        key: "amount",
        label: "Amount",
        render: row =>
            `₹ ${row.amount}`,
    },
    {
        key: "type",
        label: "Type",
        render: row => (
            <Badge variant={row.type}>
                {row.type}
            </Badge>
        ),
    },
    {
        key: "transaction_date",
        label: "Date",
    },

];
export default function TransactionTable({ data, }) {
    return (
        <Table
            columns={columns}
            data={data}
        />

    );

}