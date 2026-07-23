import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../../constants/queryKeys";
import { getCategorySummary } from "../services/dashboardService";

export default function useCategorySummary() {
    return useQuery({
        queryKey: QUERY_KEYS.DASHBOARD_CATEGORIES,
        queryFn: async () => {
            const data = await getCategorySummary();

            return data.map((item) => ({
                ...item,
                amount: Number(item.amount),
            }));
        },
        staleTime: 1000 * 60 * 5,
    });
}