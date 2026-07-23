import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../constants/queryKeys";
import { getMonthlySummary } from "../services/dashboardService";

export default function useMonthlySummary() {
    return useQuery({
        queryKey: QUERY_KEYS.DASHBOARD_MONTHLY,
        // queryFn: async () => {
        //     const response = await getMonthlySummary();
        //     return response.data;
        // },
        queryFn: getMonthlySummary,
        staleTime: 1000 * 60 * 5,
    });
}