import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css'

function InfoAccordion() {
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

  useEffect(() => {
    const controller = new AbortController() // 使用 AbortController 管理請求
    const signal = controller.signal

    fetch(`${API_BASE_URL}/api/QA/questions/`, { signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        console.log('Fetched questions:', data) // Debug output
        setQuestions(data)
        setLoading(false)
      })
      .catch((error) => {
        if (error.name !== 'AbortError') { // 避免中止請求的錯誤
          console.error('Fetch error:', error) // Debug output
          setError(error)
          setLoading(false)
        }
      })

    return () => {
      controller.abort() // 中止請求
    }
  }, [])

  if (loading) return <div className="text-center text-info mt-4">Loading...</div>
  if (error) return <div className="text-center text-danger mt-4">Error: {error.message}</div>

  return (
    <Accordion defaultActiveKey="0" flush>
      {questions.length > 0 ? (
        questions.map((question, index) => (
          <Accordion.Item eventKey={index.toString()} key={question.id || `item-${index}`}>
            <Accordion.Header>Ｑ. {question.name}</Accordion.Header>
            <Accordion.Body className="accordion-body">
              {question.answer}
            </Accordion.Body>
          </Accordion.Item>
        ))
      ) : (
        <div className="text-center mt-4 text-secondary">No questions available. Please try again later.</div>
      )}
    </Accordion>
  )
}

export default function InfoAccordionWithBoundary() {
  return (

    
    <InfoAccordion />

  )
}
