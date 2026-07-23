import React from "react";
import Card from "../../../components/ui/Card/Card";
import formatCurrency from "../../../utils/formatCurrency";

const DashboardSummaryCard = ({
    title,
    value,
    subtitle,
    icon,
    iconBgColor = "bg-gray-100",
    iconColor = "text-gray-600",
    isCurrency = false,
}) => {

    return (
        <Card
            className=" flex items-center justify-between "
        >
            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {title}
                </p>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                    {isCurrency ? formatCurrency(value) : value}
                </h2>

                {subtitle && (
                    <p className=" text-sm text-gray-500 dark:text-gray-400 mt-1 ">
                        {subtitle}
                    </p>
                )}

            </div>


            {icon && (
                <div
                    className={` w-12 h-12 rounded-full flex items-center justify-center
                        ${iconBgColor}
                        ${iconColor}
                    `}
                >
                    {icon}
                </div>
            )}

        </Card>
    );
};


export default DashboardSummaryCard;