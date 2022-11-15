import React, { useEffect, useState } from 'react'
import './CheckCalculator.css'
import AddPerson from './AddPerson'
import AddPersonTotal from './AddPersonTotal'
import CheckLogo from '../icons/Bookmark-logo.png'

function CheckCalculation() {

  const [persons, setPersons] = useState<{name : string; items: number[]; total: number}[]>([])

  let vat : number = 0;
  let service : number = 0;
  let total : number = 0;
  let tip : number = 0
  

  function addPerson() {
    let oldArray = persons;
    let newArray = [...oldArray, {name: '', items: [], total: 0}];
    setPersons(newArray);
  }

  function removePerson(index : number) {
    setPersons((persons: any[]) => {
        return persons.filter((_item: any, i) => i !== index)
    })
  }

  function setItem(item : number, personIndex : number, itemIndex: number){
    
  }

  function removeItem(itemIndex: number, personIndex: number) {

  }

  function calculateTotal() {
    setPersons((persons: any[]) =>
      persons.map((person) => { 
        let personTotal = 0
        for (let i = 0; i < person.items.length; i++) {
          personTotal += person.items[i];
          console.log(person.items[i])
        }
        personTotal =+ total*(vat/100) + total*(service/100) + tip/persons.length
        console.log(personTotal)
        return {...person, total: personTotal}
      })
  )}

  useEffect(() => {
    window.localStorage.setItem('check-people', JSON.stringify(persons))
  }, [persons]);

  useEffect(() => {
    const data = window.localStorage.getItem('check-people');
    if ( data !== null ) setPersons(JSON.parse(data));
  }, []);


  return (
    <>
    <main className='check-calculator'>
        <div className='calculator-form-container'> 
          <img src={CheckLogo} alt='Bookmark logo'/>
          <form>
            <h2 className='form-title'>
                Check Calculator
            </h2>
              <label htmlFor='vat'>Vat Tax: </label>
              <input type='number' placeholder='Required %' onChange={e => vat = parseInt(e.currentTarget.value)}/>

              <label htmlFor='service'>Service Tax: </label>
              <input type='number' placeholder='Required %' onChange={e => service = parseInt(e.currentTarget.value)}/>

              <label htmlFor='total'> Tip: </label>
              <input type='number' placeholder='Optional $' onChange={e => tip = parseInt(e.currentTarget.value)}/>

              <label htmlFor='total'>Total: </label>
              <input type='number' placeholder='Optional $' onChange={e => total = parseInt(e.currentTarget.value)}/>
          </form>
        </div>
        <div className='calculator-persons-container'>
            <ul className='calculator-people'>
              <AddPerson 
              persons={persons} 
              removePerson={removePerson}
              removeItem={removeItem}
              setItem={setItem} />
            </ul>
        <button onClick={() => addPerson()}> Add Person </button>
        </div>
        <div className='calculator-output-container'>
          <ul>
            <AddPersonTotal persons={persons} />
          </ul>
        </div>
    </main>
    </>
  )
}

export default CheckCalculation