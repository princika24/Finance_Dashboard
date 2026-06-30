import { navigation } from "../../constants/navigation";

import NavItem from "./NavItem";

export default function Sidebar() {

    return (

        <aside
            className=" w-64 min-h-screen border-r border-gray-200 dark:border-gray-700 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
            <div className="p-6">

                <h1 className="text-2xl font-bold">
                    AI Copilot
                </h1>
            </div>
            <nav className="space-y-2 px-4">
                {navigation.map((item) => (
                    <NavItem
                        key={item.path}
                        {...item}
                    />
                ))}
            </nav>
        </aside>

    );

}