import { NavLink } from "react-router-dom";

export default function NavItem({
    title,
    path,
    icon: Icon
}) {

    return (

        <NavLink
            to={path}
            className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${
                    isActive
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`
            }
        >
            <Icon size={20} />
            <span>{title}</span>
        </NavLink>

    );

}