export default function Table({
    columns,
    data,
    renderActions,

}) {

    return (

        <div className="overflow-x-auto rounded-xl border">
            <table className="min-w-full">
                <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                        {columns.map(column => (

                            <th
                                key={column.key}
                                className="px-4 py-3 text-left text-sm font-semibold"
                            >
                                {column.label}
                            </th>
                        ))}
                        {renderActions && (
                            <th className="px-4 py-3">
                                Actions
                            </th>
                        )}
                    </tr>

                </thead>
                <tbody>

                    {data.map(row => (
                        <tr
                            key={row.id}
                            className="border-t"
                        >
                            {columns.map(column => (
                                <td
                                    key={column.key}
                                    className="px-4 py-3"
                                >

                                    {column.render
                                        ? column.render(row)
                                        : row[column.key]
                                    }
                                </td>
                            ))}
                            {renderActions && (
                                <td className="px-4 py-3">
                                    {renderActions(row)}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );

}