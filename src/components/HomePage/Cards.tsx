import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>
            Main Functions
        </h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src = '/images/Gynie-home.jpg'
                    label='Sign in required'
                    path='/ToDoList'
                    text='ToDo List'/>
                    <CardItem 
                    src = '/images/Gynie-home.jpg'
                    label='Sign in required'
                    path='/Bookmark'
                    text='Site Bookmarks'/>
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                    src = '/images/Gynie-home.jpg'
                    label='Sign in required'
                    path='/Schedule'
                    text='Schedule Planner'/>
                    <CardItem 
                    src = '/images/Gynie-home.jpg'
                    label='No sign in required'
                    path='/Notes'
                    text='Notes'/>
                </ul>
        <h1>
            Mini Functions
        </h1>
                <ul className='cards__items'>                   
                    <CardItem 
                    src = '/images/Gynie-home.jpg'
                    label='No sign in required'
                    path='/MeasurementsConverter'
                    text='Measurements Converter'/>
                    <CardItem 
                    src = '/images/Gynie-home.jpg'
                    label='No sign in required'
                    path='/CheckCalculator'
                    text='Check Calculator'/>
                    <CardItem 
                    src = '/images/Gynie-home.jpg'
                    label='No sign in required'
                    path='/GradeCalculator'
                    text='Grade Calculator'/>=
                </ul>
                <ul className='cards__items'>                   
                    <CardItem 
                    src = '/images/Gynie-home.jpg'
                    label='No sign in required'
                    path='/null'
                    text='null'/>
                    <CardItem 
                    src = '/images/Gynie-home.jpg'
                    label='No sign in required'
                    path='/null'
                    text='null'/>
                    <CardItem 
                    src = '/images/Gynie-home.jpg'
                    label='No sign in required'
                    path='/null'
                    text='null'/>=
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards