import React from 'react'
import QuizCard from '../components/QuizCard/QuizCard'

function QuizPage({ questions, quizNumber, setQuizNumber, setStep }) {
  const currentQuiz = questions[quizNumber]

  const styles = {
    wrapper: {
      width: '920px',
      backgroundColor: '#fff',
      padding: '9px',
      border: '9px solid #c7c7c7',
      borderRadius: '12px',
    },
  }

  return (
    <div style={styles.wrapper}>
      <QuizCard
        question={currentQuiz}
        setQuizNumber={setQuizNumber}
        questions={questions}
        quizNumber={quizNumber}
        setStep={setStep}
      />
    </div>
  )
}

export default QuizPage
