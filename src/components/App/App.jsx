import React, { useState } from "react";
import Section from "../Feedback/FeedbackSection/FeedbackSection";
import FeedbackOptions from "../Feedback/FeedbackOptions/FeedbackOptions";
import Statistics from "../Feedback/FeedbackStatistics/FeedbackStatistics";

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
    const total = countTotalFeedback()
    if (!total) {
      return 0
    }
    return Number(((good / total) * 100).toFixed(0))
  }

  return (
    <>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title='Statistics'>
        {<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />}
      </Section>
    </>
  )
}
