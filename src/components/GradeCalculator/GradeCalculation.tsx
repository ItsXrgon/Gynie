import React from 'react'
import './GradeCalculation.css'

function GradeCalculation() {
  return (
    <>
      <main>
        <div className='grade-form-container'>
            <div className='form-output'>
                <h1>

                </h1>
            </div>
            <div className='grade-input'>
                <form className='grades-form'>
                  <div className='coursework'>
                    <h2>
                        Course Work
                    </h2>
                    <div className='form-field'>
                      <label>
                          CourseWork 1:
                      </label>
                      <input />
                    </div>
                    <div className='form-field'>
                      <label>
                          CourseWork 2:
                      </label>
                      <input />
                    </div>
                    <div className='form-field'>
                      <label>
                          CourseWork 3:
                      </label>
                      <input />
                    </div>
                    <div className='form-field'>
                      <label>
                          CourseWork 4:
                      </label>
                      <input />
                    </div>
                  </div>
                  <div className='assignments'>
                    <h2>
                      Assignments
                    </h2>
                    <div className='form-field'>
                      <label>
                        Assignment 1:
                      </label>
                      <input />
                    </div>
                    <div className='form-field'>
                      <label>
                        Assignment 2:
                      </label>
                      <input />
                    </div>
                    <div className='form-field'>
                      <label>
                        Assignment 3:
                      </label>
                      <input />
                    </div>
                    <div className='form-field'>
                      <label>
                        Assignment 4:
                      </label>
                      <input />
                    </div>
                  </div>
                  <div className='quizzes'>
                    <h2>
                      Quizzes
                    </h2>
                    <div className='form-field'>
                      <label>
                          Quiz 1:
                      </label>
                      <input />
                    </div>
                    <div className='form-field'>
                      <label>
                          Quiz 2:
                      </label>
                      <input />
                    </div>
                    <div className='form-field'>
                      <label>
                          Quiz 3:
                      </label>
                      <input />
                    </div>
                  </div>
                  <div className='exams'>
                    <h2>
                      Exams
                    </h2>
                    <div className='form-field'>
                      <label>
                          Midterm:
                      </label>
                      <input/>
                    </div>
                    <div className='form-field'>
                      <label>
                          Final:
                      </label>
                      <input />
                    </div>
                  </div>
                </form>
            </div>
        </div>
      </main>
    </>
  )
}

export default GradeCalculation