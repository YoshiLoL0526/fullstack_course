const Statistics = ({ feedback }) => {
    return (
        <div>
            <h1>Statistics</h1>
            <ul>
                <li>Good: {feedback.good}</li>
                <li>Bad: {feedback.bad}</li>
                <li>Neutral: {feedback.neutral}</li>
            </ul>
        </div>
    )
}

export default Statistics