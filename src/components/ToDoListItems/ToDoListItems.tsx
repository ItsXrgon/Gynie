import React from 'react'
import { ReactComponent as Complete } from '../ToDoListItems/done_icon.svg'
import { ReactComponent as Remove } from '../ToDoListItems/remove_icon.svg'
import { ReactComponent as Subtask } from '../ToDoListItems/subtask_icon.svg'

const ToDoListItems = ({
    list
    } : {
    list: string[]
    }) => {

    console.log(list)
    const mappedData = list.map((listItem,  i) => {

    return (
        <li key={i} className='todo-list-item'>
            aaaaaa {listItem}
            <div className='todo-list-item-buttons'>
              <div className='button-container'>
                  <Complete className='Complete' />
              </div>
              <div className='button-container'>
                  <Subtask className='Subtask'/>
              </div>
              <div className='button-container'>
                  <Remove className='Remove'/>
              </div>
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

export default ToDoListItems