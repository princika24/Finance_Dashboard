import { useQuery } from "@tanstack/react-query";
import { getDashboardSummary } from "../services/dashboardService";

export function useDashboard() {
    return useQuery({
        queryKey: QUERY_KEYS.DASHBOARD_SUMMARY,
        queryFn: async () => {
            const response = await getDashboardSummary();
            return response.data;
        },
    });
}