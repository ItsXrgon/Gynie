import React from 'react'
import { useEffect, useState } from 'react'
import './GradeCalculation.css'
import GradeField from './GradeField'

function GradeCalculation() {

  let grades : {yourGrade: number, maxGrade: number, percentage: number }[] = [];

  function setGrade(id: number, field: number, value: number){
      let grade: {yourGrade: number, maxGrade: number, percentage: number } =  grades[id]
      switch (field) {
        case 0:
          grade.yourGrade = value;
          break;
        case 1:
          grade.maxGrade = value;
          break;
        case 2:
          grade.percentage = value;
          break;
        default:
          break;
      }
  }

  let finalGrade: number = 0;

  function calculateFinalGrade(grades : {yourGrade: number, maxGrade: number, percentage: number }[]) {
     finalGrade = 0;
     for(let i=0;i<grades.length;i++){
        finalGrade += (grades[i].yourGrade/grades[i].maxGrade)*(grades[i].percentage/100)
        console.log(finalGrade)
     }
  }

  useEffect(() => {
    const timer = setTimeout(() => calculateFinalGrade(grades), 500) // this is the debounce time, 500 ms

    return () => {
      clearTimeout(timer)
    }
  }, [grades])

  return (
    <>
      <main>
            <div className='form-output'>
                <h1>
                  {finalGrade}
                </h1>
            </div>
        <div className='grade-form-container'>
            <div className='grade-input-form'>
                <form className='grades-form'>
                  <div className='coursework'>
                    <div className='field-title'>
                        Course Work Grades
                    </div>
                    <GradeField fieldName={'Course Work 1:'} id={0} setGrade={setGrade}/>
                    <GradeField fieldName={'Course Work 2:'} id={1} setGrade={setGrade}/>
                    <GradeField fieldName={'Course Work 3:'} id={2} setGrade={setGrade}/>
                    <GradeField fieldName={'Course Work 4:'} id={3} setGrade={setGrade}/>
                    <GradeField fieldName={'Course Work 5:'} id={4} setGrade={setGrade}/>
                  </div>
                  <div className='assignments'>
                    <div className='field-title'>
                      Assignments Grades
                    </div>
                    <GradeField fieldName={'Assignment 1:'} id={5} setGrade={setGrade}/>
                    <GradeField fieldName={'Assignment 2:'} id={6} setGrade={setGrade}/>
                    <GradeField fieldName={'Assignment 3:'} id={7} setGrade={setGrade}/>
                    <GradeField fieldName={'Assignment 4:'} id={8} setGrade={setGrade}/>
                  </div>
                  <div className='projects'>
                    <div className='field-title'>
                      Projects Grades
                    </div>
                    <GradeField fieldName={'Project 1:'} id={9} setGrade={setGrade}/>
                    <GradeField fieldName={'Project 2:'} id={10} setGrade={setGrade}/>
                    <GradeField fieldName={'Project 3:'} id={11} setGrade={setGrade}/>
                  </div>
                  <div className='quizzes'>
                    <div className='field-title'>
                      Quizzes Grades
                    </div>
                    <GradeField fieldName={'Quiz 1:'} id={11} setGrade={setGrade}/>
                    <GradeField fieldName={'Quiz 2:'} id={12} setGrade={setGrade}/>
                    <GradeField fieldName={'Quiz 3:'} id={13} setGrade={setGrade}/>
                    <GradeField fieldName={'Quiz 4:'} id={14} setGrade={setGrade}/>
                  </div>
                  <div className='exams'>
                    <div className='field-title'>
                      Exams Grades
                    </div>
                    <GradeField fieldName={'Midterm:'} id={15} setGrade={setGrade}/>
                    <GradeField fieldName={'Final:'} id={16} setGrade={setGrade}/>
                  </div>
                </form>
            </div>
        </div>
      </main>
    </>
  )
}

export default GradeCalculation