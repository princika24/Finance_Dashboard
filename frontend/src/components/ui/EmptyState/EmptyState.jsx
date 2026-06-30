import Button from "../Button/Button";

export default function EmptyState({

    title,

    description,

    buttonText,

    onClick,

}) {

    return (

        <div className="py-16 text-center">
            <h2 className="text-2xl font-semibold">
                {title}
            </h2>

            <p className="mt-2 text-muted">
                {description}
            </p>

            {buttonText && (
                <Button
                    className="mt-6"
                    onClick={onClick}
                >
                    {buttonText}
                </Button>
            )}
        </div>

    );

}