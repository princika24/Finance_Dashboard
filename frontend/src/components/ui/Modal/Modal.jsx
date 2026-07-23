import { X } from "lucide-react";

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
    maxWidth = "max-w-2xl",
}) {

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4
            "
        >

            <div
                className={`
                    w-full
                    ${maxWidth} max-h-[90vh]
                    flex flex-col overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-xl
                `}
            >

                <div
                    className="
                        flex shrink-0
                        items-center
                        justify-between
                        border-b
                        px-6
                        py-4
                        bg-white
                        dark:bg-gray-900
                    "
                >

                    <h2 className="text-xl font-semibold">
                        {title}
                    </h2>

                    <button
                        onClick={onClose}
                        className="
                            rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800
                        "
                    >
                        <X size={20} />
                    </button>

                </div>

                <div
                    className="
                        flex-1 overflow-y-auto p-6
                    "
                >
                    {children}
                </div>
            </div>
        </div>
    );
}