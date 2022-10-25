import React from 'react'
import { ReactComponent as Remove } from '../BookmarkItems/remove_icon.svg'

function AddItem({
    person,
    removeItem,
    personIndex
    }:{
    person: {name: string; items: number[]; total: number; },
    removeItem: (index : number, personIndex: number) => void,
    personIndex: number
    }) {

    const mappedData = person.items.map((item,  i) => {
    
    function setItem(item : number){
        
    }

    return (
        <li key={i} className='item'>
            <label htmlFor='item'> Item {(i+1)}: </label>
            <input 
            type='number'
            onChange={e => setItem(parseInt(e.currentTarget.value))}
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