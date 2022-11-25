import React from 'react'

function AddPersonTotal({ 
    persons,
    calculateTotal
    }:{
    persons: any[],
    calculateTotal: (personIndex: number) => number
    }) {

    const mappedData = persons.map((person,  i) => {

    return (
        <li key={i} className='person-payment'>
            {'Person '+ (i+1)} Total : {calculateTotal(i)}
        </li>
    )
    })
    
    return(
    <>
        {mappedData}
    </>
    )
}

export default AddPersonTotal