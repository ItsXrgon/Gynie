import React from 'react'

function AddPersonTotal({ 
    persons,
    }:{
    persons: any[],
    }) {

    const mappedData = persons.map((person,  i) => {

    return (
        <li key={i} className='person-payment'>
            {person.name ? person.name : 'Person '+ (i+1)} Total : {person.total}
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