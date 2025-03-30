import { useState } from 'react'
import './App.css'
import Feedback from './components/Feedback.jsx'
import Statistics from './components/Statistics.jsx'

function App() {
  const [feedback, setFeedback] = useState({ good: 0, bad: 0, neutral: 0 })

  return (
    <>
      <Feedback feedback={feedback} setFeedback={setFeedback} />
      <Statistics feedback={feedback} />
    </>
  )
}

export default App
