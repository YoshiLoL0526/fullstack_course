interface TotalProps {
    total: number
}

const Total: React.FC<TotalProps> = ({ total }) => <strong>Total of {total} exercises</strong>

export default Total