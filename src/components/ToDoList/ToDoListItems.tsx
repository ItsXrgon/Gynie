import React from 'react'
import { ReactComponent as Complete } from '../icons/done_icon.svg'
import { ReactComponent as Remove } from '../icons/remove_icon.svg'
import { ReactComponent as Subtask } from '../icons/subtask_icon.svg'

const ToDoListItems = ({
    list
    } : {
    list: string[]
    }) => {

    const mappedData = list.map((listItem,  i) => {

    return (
        <li key={i} className='todo-list-item'>
            <div className='todo-list-item-text'>
                {listItem}
            </div>
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