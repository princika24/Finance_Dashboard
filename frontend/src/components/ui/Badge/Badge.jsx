import clsx from "clsx";
export default function Badge({
    children,
    variant = "default",
}) {

    const styles = {

        income: "bg-green-100 text-green-700",
        expense: "bg-red-100 text-red-700",
        default: "bg-gray-100 text-gray-700",
    };

    return (
        <span
            className={clsx(
                "rounded-full px-3 py-1 text-xs font-medium",
                styles[variant]
            )}
        >
            {children}

        </span>

    );

}