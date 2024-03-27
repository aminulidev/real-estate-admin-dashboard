type AuthHeaderProps = {
    title: string;
    description: string;
}

export const AuthHeader = ({title, description}:AuthHeaderProps) => {
    return (
        <div className="space-y-2.5 text-center">
            <h1 className="text-4xl leading-12.5 font-bold">{title}</h1>
            <p className="text-secondary">{description}</p>
        </div>
    );
};