import Button from './Button.jsx'

const Feedback = ({ feedback, setFeedback }) => {
    const goodFeedback = () => {
        setFeedback({ ...feedback, good: feedback.good + 1 })
    }
    const badFeedback = () => {
        setFeedback({ ...feedback, bad: feedback.bad + 1 })
    }
    const neutralFeedback = () => {
        setFeedback({ ...feedback, neutral: feedback.neutral + 1 })
    }

    return (
        <div>
            <h1>Give feedback</h1>
            <ul>
                <li><Button text='Good' action={() => goodFeedback()} /></li>
                <li><Button text='Bad' action={() => badFeedback()} /></li>
                <li><Button text='Neutral' action={() => neutralFeedback()} /></li>
            </ul>
        </div>
    )
}

export default Feedback