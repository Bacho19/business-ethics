import React from 'react'

function HomePage({ setStep, setQuizNumber }) {
  const StartQuiz = () => {
    setQuizNumber(0)
    setStep(2)
  }

  const styles = {
    logo: {
      width: '120px',
      borderRadius: '50%',
      display: 'block',
      margin: '0 auto',
    },
    title: {
      fontSize: '24px',
      textAlign: 'center',
      marginTop: '12px',
      marginBottom: '-2px',
    },
    stitle: {
      color: '#8c897e',
      textAlign: 'center',
    },
    wrapper: {
      width: '400px',
      backgroundColor: '#fff',
      padding: '70px',
      border: '9px solid #c7c7c7',
      borderRadius: '12px',
    },
  }

  return (
    <div style={styles.wrapper}>
      <img
        src="http://www.sakpatenti.gov.ge/media/django-summernote/2021-03-26/1b40c32e-49e4-4e7e-82ce-e95231f68b43.jpg"
        alt="SEU"
        style={styles.logo}
      />
      <p style={styles.title}>Good luck!</p>
      <p style={styles.stitle}>Click on the button to start quiz</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={StartQuiz}
        style={{ margin: '0 auto', display: 'block', marginTop: '32px' }}
      >
        Start quiz
      </button>
    </div>
  )
}

export default HomePage
