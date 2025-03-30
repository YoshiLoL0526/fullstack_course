interface ButtonProps {
    action: () => void;
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text, action }) => {
    return (
        <button onClick={action}>
            {text}
        </button>
    )
}

export default Button