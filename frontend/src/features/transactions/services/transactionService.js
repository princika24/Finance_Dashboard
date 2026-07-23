import api from "../../../services/api";
import { ENDPOINTS } from "../../../services/endpoints";

export const getTransactions = (params) =>
    api.get(
        ENDPOINTS.TRANSACTIONS,
        {
            params,
        }
    );

export const createTransaction = (data) =>
    api.post(
        ENDPOINTS.TRANSACTIONS,
        data
    );

export const updateTransaction = (
    id,
    data
) =>
    api.put(
        `${ENDPOINTS.TRANSACTIONS}/${id}`,
        data
    );

export const deleteTransaction = (id) =>
    api.delete(
        `${ENDPOINTS.TRANSACTIONS}/${id}`
    );

export const getTransaction = (id) =>
    api.get(
        `${ENDPOINTS.TRANSACTIONS}/${id}`
    );