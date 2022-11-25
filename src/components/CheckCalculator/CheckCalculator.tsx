import React, { useEffect, useState } from 'react'
import './CheckCalculator.css'
import AddPerson from './AddPerson'
import AddPersonTotal from './AddPersonTotal'
import CheckLogo from '../icons/Bookmark-logo.png'

function CheckCalculation() {

  const [persons, setPersons] = useState<{items: number[]}[]>([])

  let vat : number = 0;
  let service : number = 0;
  let total : number = 0;
  let tip : number = 0
  

  function addPerson() {
    let newArray = [...persons, {items: [0]}];
    setPersons(newArray);
  }

  function removePerson(index : number) {
    setPersons((persons: any[]) => {
        return persons.filter((_item: any, i) => i !== index)
    })
  }

  function calculateTotal(personIndex: number) {
    let total = 0
    persons[personIndex].items.map((item: number) => {
        total += item + (item*service) + (item*vat)
    })
    total += tip/persons.length
    return total
}

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
              setPersons={setPersons} />
            </ul>
        <button onClick={() => addPerson()}> Add Person </button>
        </div>
        <div className='calculator-output-container'>
          <ul>
            <AddPersonTotal persons={persons} calculateTotal={calculateTotal} />
          </ul>
        </div>
    </main>
    </>
  )
}

export default CheckCalculation