import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../constants/queryKeys";
import { getDashboardSummary } from "../services/dashboardService";

export default function useDashboardSummary() {
    return useQuery({
        queryKey: QUERY_KEYS.DASHBOARD_SUMMARY,
        queryFn: async () => {
            const data = await getDashboardSummary();
            return data;
        },
        staleTime: 1000 * 60 * 5, 
    });
}