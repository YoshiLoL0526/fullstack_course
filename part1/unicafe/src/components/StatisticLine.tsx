interface StatisticLineProps {
    text: string
    value: number | string
}

const StatisticLine: React.FC<StatisticLineProps> = ({ text, value }) => {
    return (
        <td>
            {text}: {value}
        </td>
    )
}

export default StatisticLine