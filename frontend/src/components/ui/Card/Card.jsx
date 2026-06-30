export default function Card({
    children,
    className = ""

}) {

    return (
        <div
            className={`rounded-2xl
                bg-surface border border-app p-6 shadow-sm transition-all hover:shadow-md ${className} `}
        >
            {children}
        </div>
    );
}