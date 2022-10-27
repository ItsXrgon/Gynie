import React from 'react'

function GradeField({
    fieldName,
    id,
    setGrade
    }:{
    fieldName: string,
    id: number,
    setGrade : (id: number, field: number, value: number) => void
    }) {
  return (
    <div className='form-field' key={id}>
        <label>
            {fieldName}
        </label>
        <div className='form-inputs'>
            <input placeholder='Your Grade' type='number' onChange={(e) => setGrade(id, 0, parseInt(e.currentTarget.value))}/>
            <input placeholder='Max Grade' type='number' onChange={(e) => setGrade(id, 1, parseInt(e.currentTarget.value))}/>
            <input placeholder='% of Course Grade' type='number' onChange={(e) => setGrade(id, 2, parseInt(e.currentTarget.value))}/>
        </div>    
    </div>
  )
}

export default GradeField