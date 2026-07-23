import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../constants/queryKeys";
import { getRecentTransactions } from "../services/dashboardService";

export default function useRecentTransactions() {
    return useQuery({
        queryKey: QUERY_KEYS.DASHBOARD_RECENT,
        queryFn: getRecentTransactions,
        staleTime: 1000 * 60 * 5,
    });
}