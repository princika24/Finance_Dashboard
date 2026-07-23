import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTransaction } from "../services/transactionService";
import toast from "react-hot-toast";

export function useCreateTransaction() {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createTransaction,
        onSuccess: () => {

            queryClient.invalidateQueries({
                queryKey: ["transactions"],
            });
            toast.success(
                "Transaction created successfully"
            );

        },
        onError: (error) => {
            console.log(error.response?.data);

            const detail = error.response?.data?.detail;

            const message = Array.isArray(detail)
                ? detail.map((err) => err.msg).join(", ")
                : detail || "Unable to create transaction";

            toast.error(message);
        },

        },

    );

}