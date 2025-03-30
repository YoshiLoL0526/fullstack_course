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
            <div>
                <StatisticLine text='Good' value={feedback.good} />
                <StatisticLine text='Neutral' value={feedback.neutral} />
                <StatisticLine text='Bad' value={feedback.bad} />
                <StatisticLine text='All' value={all} />
                <StatisticLine text='Average' value={average} />
                <StatisticLine text='Positive' value={`${positive} %`} />
            </div>
        </div>
    )
}

export default Statistics