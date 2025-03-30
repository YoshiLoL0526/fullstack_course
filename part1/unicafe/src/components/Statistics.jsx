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
            <ul>
                <li>Good: {feedback.good}</li>
                <li>Bad: {feedback.bad}</li>
                <li>Neutral: {feedback.neutral}</li>
                <li>All: {all}</li>
                <li>Average: {average}</li>
                <li>Positive: {positive} %</li>
            </ul>
        </div>
    )
}

export default Statistics