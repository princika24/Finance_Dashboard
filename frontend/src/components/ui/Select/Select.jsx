import clsx from "clsx";

export default function Select({
    label,
    error,
    options = [],
    className = "",
    ...props
}) {
    return (
        <div className="space-y-1">
            {label && (
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    {label}
                </label>
            )}

            <select
                {...props}
                className={clsx(
                    "w-full rounded-lg border px-3 py-2",
                    "bg-white dark:bg-gray-800",
                    "text-gray-900 dark:text-white",
                    "border-gray-300 dark:border-gray-700",
                    "focus:outline-none",
                    "focus:ring-2 focus:ring-blue-500",
                    "transition",
                    error &&
                        "border-red-500 focus:ring-red-500",
                    className
                )}
            >
                <option value="">
                    Select an option
                </option>

                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                    >
                        {option.label}
                    </option>
                ))}
            </select>

            {error && (
                <p className="text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}