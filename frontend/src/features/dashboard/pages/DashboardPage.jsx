import Card from "../../../components/ui/Card/Card";
import PageHeader from "../../../components/ui/PageHeader/PageHeader";
import AppContainer from "../../../components/ui/AppContainer/AppContainer";
import StatsGrid from "../components/StatsGrid";
import WelcomeBanner from "../components/WelcomeBanner";
import DashboardHeader from "../components/DashboardHeader";
import IncomeExpenseChart from "../components/IncomeExpenseChart";
import CategoryPieChart from "../components/CategoryPieChart";
import RecentTransactionsCard from "../components/RecentTransactionsCard";
import QuickActions from "../components/QuickActions";

// export default function DashboardPage() {
//     return (
//         <>
//             <AppContainer>
//                 <DashboardHeader />
//                 <WelcomeBanner />
//                 <StatsGrid />
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
//                     <IncomeExpenseChart/>
//                     <CategoryPieChart/>
//                 </div>
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
//                     <RecentTransactionsCard/>
//                     <QuickActions/>
//                 </div>
//             </AppContainer>
//         </>
//     );
// }

export default function DashboardPage() {
    return (
        <AppContainer>
            <div className="space-y-6">

                <DashboardHeader />

                <WelcomeBanner />

                <StatsGrid />

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <IncomeExpenseChart />
                    <CategoryPieChart />
                </div>

                <RecentTransactionsCard />

                <Card>
                    <div className="p-5">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Quick Actions
                        </h2>

                        <QuickActions />
                    </div>
                </Card>
            </div>
        </AppContainer>
    );
}