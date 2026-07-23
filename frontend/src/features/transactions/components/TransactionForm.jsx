import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../../../components/ui/Input/Input";
import Select from "../../../components/ui/Select/Select";
import Button from "../../../components/ui/Button/Button";

import {
    TRANSACTION_TYPES,
    PAYMENT_METHODS,
    TRANSACTION_CATEGORIES,
} from "../../../constants/transactionOptions";

import { transactionSchema } from "../validation/transactionSchema";
export default function TransactionForm({
    defaultValues,
    onSubmit,
    loading,
}) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver:
            zodResolver(transactionSchema),
        defaultValues,

    });

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
        >
            <Input
                label="Title"
                placeholder="Netflix Subscription"
                error={errors.title?.message}
                {...register("title")}
            />
            <Input
                label="Description"
                placeholder="Optional"
                error={errors.description?.message}
                {...register("description")}
            />
            <Input
                type="number"
                step="0.01"
                label="Amount"
                error={errors.amount?.message}
                {...register(
                    "amount",
                    {
                        valueAsNumber: true,
                    }
                )}
            />
            <Select
                label="Type"
                options={TRANSACTION_TYPES}
                error={errors.type?.message}
                {...register("type")}
            />
            <Select
                label="Category"
                options={TRANSACTION_CATEGORIES}
                error={errors.category?.message}
                {...register("category")}
            />
            <Select
                label="Payment Method"
                options={PAYMENT_METHODS}
                error={errors.payment_method?.message}
                {...register("payment_method")}
            />
            <Input
                type="date"
                label="Transaction Date"
                error={
                    errors.transaction_date?.message
                }
                {...register("transaction_date")}
            />
            <label className="flex items-center gap-2">

                <input
                    type="checkbox"
                    {...register("is_recurring")}
                />

                Recurring Transaction

            </label>
            <Button
                loading={loading}
                type="submit"
                className="w-full"
            >
                Save Transaction
            </Button>

        </form>
    );

}