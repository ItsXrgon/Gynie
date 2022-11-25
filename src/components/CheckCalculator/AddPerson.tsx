import React from 'react'
import AddItem from './AddItem'
import { ReactComponent as Remove } from '../icons/remove_icon.svg'


function AddPerson({
    persons,
    removePerson,
    setPersons
    }:{
    persons: any[],
    removePerson : (index : number) => void,
    setPersons: (persons: {items: number[]}[]) => void
    }) {

    function addItem(index: number) {
        let person = persons[index]
        let newPersons : {items: number[]}[] = persons
        newPersons[index] = {items: [...person.items, 0]}
        setPersons(newPersons)
    }

    function removeItem(itemIndex: number, personIndex: number) {
        persons.map((person,  i) => {
            if(i == personIndex) {
                person.items.map((item: number, j: number) => {
                    if(j == itemIndex) {
                        let newItems = person.items.filter((_item: any, i: any) => i !== j)
                        let newPersons: {items: number[]}[] = persons;
                        newPersons[personIndex].items = newItems;
                        setPersons(newPersons) 
                    }
                })        
            }  
        })  
    }

    const mappedData = persons.map((person,  i) => {
    
    return (
        <li key={i}>
            <div className='person-label'>
                    {person.name ? person.name : 'Person ' + (i+1)}
                <div className='button-container' onClick={() => removePerson(i)}>
                        <Remove className='logo'/>
                </div>
            </div>
            <ul className='person-items'>
                <AddItem person={person} removeItem={removeItem} personIndex={i}/>
            </ul>
            <button onClick={() => addItem(i)}> Add Item </button>
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

