import StatisticLine from "./StatisticLine.jsx"

const Statistics = ({ feedback }) => {
    const all = feedback.good + feedback.bad + feedback.neutral
    const average = feedback.good * 1 + feedback.bad * -1 + feedback.neutral * 0
    const positive = (feedback.good / all) * 100

    if (all === 0) {
        return (
            <div>
                <h1>Statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Statistics</h1>
            <table>
                <tbody>
                    <tr>
                        <StatisticLine text='Good' value={feedback.good} />
                    </tr>
                    <tr>
                        <StatisticLine text='Neutral' value={feedback.neutral} />
                    </tr>
                    <tr>
                        <StatisticLine text='Bad' value={feedback.bad} />
                    </tr>
                    <tr>
                        <StatisticLine text='All' value={all} />
                    </tr>
                    <tr>
                        <StatisticLine text='Average' value={average} />
                    </tr>
                    <tr>
                        <StatisticLine text='Positive' value={`${positive} %`} />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Statistics