import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../services/transactionService";

export function useTransactions(params) {
    return useQuery({
        queryKey: ["transactions", params],
        queryFn: () => getTransactions(params),
    });
}