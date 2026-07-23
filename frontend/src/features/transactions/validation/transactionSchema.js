import { z } from "zod";

export const transactionSchema = z.object({
    title: z
        .string()
        .min(2, "Title is required"),

    description: z
        .string()
        .optional(),

    amount: z
        .number({
            invalid_type_error:
                "Amount is required",
        })
        .positive("Amount must be greater than 0"),

    type: z
        .string()
        .min(1, "Select a type"),

    category: z
        .string()
        .min(1, "Select a category"),

    payment_method: z
        .string()
        .min(1, "Select payment method"),

    transaction_date: z
        .string(),

    is_recurring: z.boolean(),
});