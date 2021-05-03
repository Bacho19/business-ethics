import React, { useState, useEffect, useRef } from 'react'
import s from './QuizCard.module.css'

function QuizCard({ question, setQuizNumber, questions, quizNumber, setStep }) {
  const [selected, setSelected] = useState()
  const radiosWrapper = useRef()
  const nextButton = useRef()

  const correctAnswer = question.answers.filter(
    (answer) => answer.isCorrect === true
  )

  const [positiveMessage, setPositiveMessage] = useState('პასუხი სწორია')
  const [negativeMessage, setNegativeMessage] = useState(
    'პასუხი არასწორია, სწორი პასუხია' + correctAnswer[0].answer
  )

  useEffect(() => {
    const findCheckedRadio = radiosWrapper.current.querySelector(
      'input:checked'
    )
    if (findCheckedRadio) {
      findCheckedRadio.checked = false
    }
    const findRadios = radiosWrapper.current.querySelectorAll('input')

    if (!selected) {
      nextButton.current.disabled = true
    }
    for (let i = 0; i < findRadios.length; i++) {
      findRadios[i].disabled = false
    }
  }, [question])

  const choiseAnswer = (e) => {
    setSelected(e.target.value)
    const findRadios = radiosWrapper.current.querySelectorAll('input')

    for (let i = 0; i < findRadios.length; i++) {
      findRadios[i].disabled = true
    }
    nextButton.current.disabled = false
    setPositiveMessage('პასუხი სწორია')
    setNegativeMessage(
      'პასუხი არასწორია, სწორი პასუხია: ' + correctAnswer[0].answer
    )
  }

  const nextQuizHandler = () => {
    if (quizNumber === questions.length - 1) {
      return setStep(3)
    }
    nextButton.current.disabled = true
    setQuizNumber((prev) => prev + 1)
    setPositiveMessage('')
    setNegativeMessage('')
    setSelected('')
  }

  return (
    <div>
      <p className={s.question__text}>{question && question.question}</p>
      <h5 style={{ textAlign: 'right' }}>
        {quizNumber + 1 + '/' + questions.length}
      </h5>
      <div className="card-body">
        <div ref={radiosWrapper}>
          {question &&
            question.answers.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <div className={s.card__input__wrapper}>
                    <input
                      key={item.id}
                      id={item.answer}
                      type="radio"
                      value={item.answer}
                      name="quiz"
                      onChange={choiseAnswer}
                      className="form-check-input"
                      style={{ marginRight: '7px', marginBottom: '7px' }}
                    />
                    <label
                      htmlFor={item.answer}
                      style={{ cursor: 'pointer' }}
                      // className="form-check-label"
                      className={`${s.card__label} form-check-label`}
                    >
                      {item.answer}
                    </label>
                    <br />
                  </div>
                </React.Fragment>
              )
            })}
        </div>
        {selected &&
          (correctAnswer[0].answer === selected ? (
            <p className="alert alert-success">{positiveMessage}</p>
          ) : (
            <p className="alert alert-danger">{negativeMessage}</p>
          ))}
        {/* {message && message} */}
        <button
          ref={nextButton}
          className="btn btn-primary"
          onClick={nextQuizHandler}
          style={{ marginTop: '15px' }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default QuizCard
