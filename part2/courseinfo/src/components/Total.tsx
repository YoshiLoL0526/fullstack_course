interface TotalProps {
    total: number
}

const Total: React.FC<TotalProps> = ({ total }) => <strong>Total of exercises {total}</strong>

export default Total