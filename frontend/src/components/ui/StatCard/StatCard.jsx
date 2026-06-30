import Card from "../Card/Card";

export default function StatCard({title, value, subtitle, icon: Icon,
}) {
    return (
        <Card>

            <div className="flex justify-between">
                <div>

                    <p className="text-muted">
                        {title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        {value}
                    </h2>

                    {subtitle && (
                        <p className="mt-2 text-sm text-muted">
                            {subtitle}
                        </p>
                    )}
                </div>

                {Icon && (
                    <div className="rounded-xl bg-blue-100 p-4">
                        <Icon size={28} />
                    </div>
                )}
            </div>
        </Card>
    );
}