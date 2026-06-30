import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import GuestRoute from "./GuestRoute"

import DashboardPage from "../features/dashboard/pages/DashboardPage";
import TransactionPage from "../features/transactions/pages/TransactionPage";
import BudgetPage from "../features/budgets/pages/BudgetPage";
import AnalyticsPage from "../features/analytics/pages/AnalyticsPage";
import AssistantPage from "../features/assistant/pages/AssistantPage";
import SettingsPage from "../features/settings/pages/SettingsPage";

export default function AppRouter() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/login" element={ <GuestRoute> <LoginPage /> </GuestRoute>}
                />

                <Route
                    path="/register" element={<GuestRoute> <RegisterPage /> </GuestRoute>}
                />

                <Route
                    element={<MainLayout />}
                >

                    <Route
                        path="/" element={<ProtectedRoute> <DashboardPage /> </ProtectedRoute>}
                    />

                    <Route
                        path="/transactions" element={<ProtectedRoute> <TransactionPage /> </ProtectedRoute>}
                    />

                    <Route
                        path="/budgets" element={<ProtectedRoute> <BudgetPage /> </ProtectedRoute>}
                    />

                    <Route
                        path="/analytics" element={<ProtectedRoute> <AnalyticsPage /> </ProtectedRoute>}
                    />

                    <Route
                        path="/assistant"  element={<ProtectedRoute> <AssistantPage /> </ProtectedRoute>}
                    />

                    <Route
                        path="/settings" element={<ProtectedRoute> <SettingsPage /> </ProtectedRoute>}
                    />
                </Route>
            </Routes>
        </BrowserRouter>

    );

}