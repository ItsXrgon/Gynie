import React from 'react'
import { ReactComponent as Remove } from '../icons/remove_icon.svg'

function AddItem({
    person,
    removeItem,
    personIndex,
    }:{
    person: {name: string; items: number[]; total: number; },
    removeItem: (index : number, personIndex: number) => void,
    personIndex: number,
    }) {

    function setItem(value: number, personIndex: number, itemIndex: number) {

    }

    const mappedData = person.items.map((i) => {
    
   
    return (
        <li key={i} className='item'>
            <label htmlFor='item'> Item {(i+1)}: </label>
            <input 
            type='number'
            onChange={e => setItem(parseInt(e.currentTarget.value), personIndex, i)}
            placeholder='Required $' />
            <div onClick={() => removeItem(i, personIndex)}>
                <Remove className='logo'/>
            </div>
        </li>
    )
    })
    
    return(
    <>
        {mappedData}
    </>
    )
}

export default AddItem