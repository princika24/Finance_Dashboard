export default function Input({
    label,
    error,
    className = "",
    ...props
}) {
    return (
        <div className="space-y-2">

            {label && (
                <label className="block font-medium">
                    {label}
                </label>
            )}

            <input
                className={`w-full rounded-xl border border-app bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
                {...props}
            />

            {error && (
                <p className="text-red-500 text-sm">
                    {error}
                </p>
            )}

        </div>
    );
}