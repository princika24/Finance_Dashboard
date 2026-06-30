export default function AuthLayout({
    title,
    subtitle,
    children,
}) {
    return (
        <div className="min-h-screen grid lg:grid-cols-2">
           { /* Left Panel */}
            <div className="hidden lg:flex flex-col justify-center bg-blue-600 p-16 text-white">
                <h1 className="text-5xl font-bold">
                    AI Financial Copilot
                </h1>
                <p className="mt-6 text-lg text-blue-100">
                    Track expenses, forecast savings,
                    manage budgets and receive
                    AI-powered financial insights.
                </p>
                <div className="mt-12 space-y-4">
                    <div>📊 Financial Analytics</div>
                    <div>🤖 AI Assistant</div>
                    <div>📈 Forecasting</div>
                    <div>💰 Budget Planner</div>
                </div>
            </div>

            {/* Right Panel */}
            <div className="flex items-center justify-center bg-app">
                <div className="w-full max-w-md">
                    <h2 className="text-4xl font-bold">
                        {title}
                    </h2>
                    <p className="mt-3 text-muted">
                        {subtitle}
                    </p>
                    <div className="mt-10">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}