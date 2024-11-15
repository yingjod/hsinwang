// InfoAccordion.js
import React , { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../style.css' // Adjust the path as necessary


function InfoAccordion() {

  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch data from the API endpoint you defined in Django
    fetch('http://127.0.0.1:8000/api/QA/questions/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setQuestions(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <Accordion defaultActiveKey="0" flush>
      {questions.map((question, index) => (
        <Accordion.Item eventKey={index.toString()} key={question.id}>
          <Accordion.Header >Ｑ. {question.name}</Accordion.Header>
          <Accordion.Body className="accordion-body">
            {question.answer} {/* Adjust 'body' if your data contains different content */}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}


export default InfoAccordion
