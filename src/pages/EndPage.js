import React from 'react'

function EndPage({ setStep }) {
  const toHomeHandler = () => {
    setStep(1)
  }

  const styles = {
    wrapper: {
      maxWidth: '920px',
      backgroundColor: '#fff',
      padding: '70px',
      border: '9px solid #c7c7c7',
      borderRadius: '12px',
    },
    title: {
      textAlign: 'center',
      marginBottom: '45px',
    },
    button: {
      display: 'block',
      margin: '0 auto',
    },
  }

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>End page</h1>
      <button
        className="btn btn-primary"
        onClick={toHomeHandler}
        style={styles.button}
      >
        Go ot home page
      </button>
    </div>
  )
}

export default EndPage
