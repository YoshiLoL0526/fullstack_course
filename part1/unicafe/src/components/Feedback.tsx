import Button from './Button.jsx'

interface FeedbackProps {
    feedback: {
        good: number
        bad: number
        neutral: number
    }
    setFeedback: (feedback: { good: number; bad: number; neutral: number }) => void
}

const Feedback: React.FC<FeedbackProps> = ({ feedback, setFeedback }) => {
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
            <div>
                <Button text='Good' action={goodFeedback} />
                <Button text='Bad' action={badFeedback} />
                <Button text='Neutral' action={neutralFeedback} />
            </div>
        </div>
    )
}

export default Feedback