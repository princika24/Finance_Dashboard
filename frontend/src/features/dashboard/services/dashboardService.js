import api from "../../../services/api";
import { ENDPOINTS } from "../../../services/endpoints";

export const getDashboardSummary = async () => {
    const response = await api.get(
        ENDPOINTS.DASHBOARD_SUMMARY
    );

    return response.data;
};

export const getMonthlySummary = async () => {
    const response = await api.get(
        ENDPOINTS.DASHBOARD_MONTHLY
    );

    return response.data;
};

export const getCategorySummary = async () => {
    const response = await api.get(
        ENDPOINTS.DASHBOARD_CATEGORIES
    );

    return response.data;
};

export const getRecentTransactions = async () => {
    const response = await api.get(
        ENDPOINTS.DASHBOARD_RECENT
    );

    return response.data;
};