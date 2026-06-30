import { LayoutDashboard, Wallet, PiggyBank, ChartColumn, Bot, Settings} from "lucide-react";

export const navigation = [

    {
        title: "Dashboard", path: "/", icon: LayoutDashboard
    },

    {
        title: "Transactions", path: "/transactions", icon: Wallet
    },

    {
        title: "Budgets", path: "/budgets", icon: PiggyBank
    },

    {
        title: "Analytics", path: "/analytics", icon: ChartColumn
    },

    {
        title: "AI Assistant", path: "/assistant", icon: Bot
    },

    {
        title: "Settings", path: "/settings", icon: Settings
    }

];