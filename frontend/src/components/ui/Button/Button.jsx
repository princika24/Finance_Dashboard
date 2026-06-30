import Spinner from "../Spinner/Spinner"

export default function Button({
    loading,
    children,
    variant = "primary",
    type = "button",
    className = "",
    ...props
}) {
    const variants = {
        primary:
            "bg-blue-600 hover:bg-blue-700 text-white",

        secondary:
            "bg-gray-200 hover:bg-gray-300 text-gray-900",

        outline:
            "border border-app bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",

        danger:
            "bg-red-600 hover:bg-red-700 text-white",
    };

    return (
        <button
            type={type}
            disabled={loading}
            className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
            {...props}
        >
            {loading && <Spinner />}
            {loading ? "Loading..." : children}
        </button>
    );
}