import React from 'react'
import AddItem from './AddItem'
import { ReactComponent as Remove } from '../icons/remove_icon.svg'


function AddPerson({
    persons,
    removePerson,
    setItem,
    setPersons
    }:{
    persons: any[],
    removePerson : (index : number) => void,
    setItem: (index : number, personIndex: number, itemIndex: number) => void,
    setPersons: (persons: {name : string; items: number[]; total: number}[]) => void
    }) {

    const mappedData = persons.map((person,  i) => {

    function addItem(index: number) {
        persons.map((person,  i) => {
            if(i == index) {
                let oldArray : number[] = person.items;
                let newItems : number[] = [...oldArray, 0];
                let newPersons: {name : string; items: number[]; total: number}[] = persons;
                newPersons[index].items = newItems;
                setPersons(newPersons)          
            }
        })  
        setPersons(persons)  
    }

    
  function removeItem(itemIndex: number, personIndex: number) {
        persons.map((person,  i) => {
            if(i == personIndex) {
                person.items.map((item: any, j: number) => {
                    if(j == itemIndex ) {
                        let newItems = person.items.filter((_item: any, i: any) => i !== j)
                        let newPersons: {name : string; items: number[]; total: number}[] = persons;
                        newPersons[personIndex].items = newItems;
                        setPersons(newPersons) 
                    }
                })        
            }  
        })  
        setPersons(persons)  
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

