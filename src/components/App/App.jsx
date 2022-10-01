import React, { useState } from "react";
import Section from "../Feedback/FeedbackSection/FeedbackSection";
import FeedbackOptions from "../Feedback/FeedbackOptions/FeedbackOptions";
import Statistics from "../Feedback/FeedbackStatistics/FeedbackStatistics";
import Notification from "components/Feedback/FeedbackNotification/FeedbackNotification";

export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onLeaveFeedback = (propertyName) => {
    if (propertyName === 'good') {
      return setGood(prev => prev + 1)
    }

    if (propertyName === 'neutral') {
      return setNeutral(prev => prev + 1)
    }

    if (propertyName === 'bad') {
      return setBad(prev => prev + 1)
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad
  }

  const countPositiveFeedbackPercentage = () => {
    if (!total) {
      return 0
    }
    return Number(((good / total) * 100).toFixed(0))
  }

  const total = countTotalFeedback()
  const positivePersentage = countPositiveFeedbackPercentage()
  return (
    <>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={Object.keys({ good, neutral, bad })} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title='Statistics'>
        {!total ? <Notification message="There is no feedback" /> : < Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePersentage} />}
      </Section>
    </>
  )
}
