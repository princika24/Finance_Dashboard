import Card from "../../../components/ui/Card/Card";
import PageHeader from "../../../components/ui/PageHeader/PageHeader";

export default function DashboardPage() {
    return (
        <>
            <PageHeader
                title="Welcome Back 👋"
                subtitle="AI Financial Copilot"
            />

            <Card className="space-y-4">
                <h2 className="text-xl font-semibold">
                    Financial Overview Coming Soon
                </h2>

                <ul className="list-disc list-inside space-y-2">
                    <li>Track Expenses</li>
                    <li>Forecast Savings</li>
                    <li>AI Insights</li>
                </ul>
            </Card>
        </>
    );
}