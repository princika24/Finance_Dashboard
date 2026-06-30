export default function AppContainer({
    children,
}) {
    return (
        <div
            className="mx-auto max-w-7xl p-8"
        >
            {children}
        </div>
    );

}