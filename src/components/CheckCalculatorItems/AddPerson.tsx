import React from 'react'
import AddItem from './AddItem'
import { ReactComponent as Remove } from '../BookmarkItems/remove_icon.svg'


function AddPerson({
    persons,
    removePerson,
    removeItem,
    setItem
    }:{
    persons: any[],
    removePerson : (index : number) => void,
    removeItem : (index : number, personIndex: number) => void,
    setItem: (index : number, personIndex: number, itemIndex: number) => void,
    }) {

    const mappedData = persons.map((person,  i) => {

    function addItem() {
        let oldArray : number[] = person.items;
        let newArray : number[] = [...oldArray, 0];
        // setPerons something to add item to persons array
    }
    
    return (
        <li key={i}>
            <div className='person-label'>
                    {person.name ? person.name : 'Person ' + (i+1)}
                <div className='button-container' onClick={() => removePerson(i)}>
                        <Remove className='logo'/>
                </div>
            </div>
            <ul className='person-items'>
                <AddItem person={person} removeItem={removeItem} setItem={setItem} personIndex={i}/>
            </ul>
            <button onClick={() => addItem()}> Add Item </button>
        </li>
    )
    })
    
    return(
    <>
        {mappedData}
    </>
    )
}

export default AddPerson

