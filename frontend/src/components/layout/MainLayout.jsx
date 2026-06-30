import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import { Outlet } from "react-router-dom";

export default function MainLayout() {

    return (
        <div className="min-h-screen
            flex
            bg-gray-100
            text-gray-900
            dark:bg-gray-950
            dark:text-white
            transition-colors">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <main className="p-8">
                    <Outlet />
                </main>
            </div>
        </div>

    );

}