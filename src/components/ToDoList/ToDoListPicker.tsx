import React from 'react'

const ToDoListPicker = ({
    lists,
    setCurrentList
    } : {
    lists : { listName: string; listDescription: string; todoItems: string[]; completedItems: string[] }[],
    setCurrentList : (listItems : {todoItems: string[], completedItems: string[]}) => void
    }) => {

    const mappedData = lists.map((list,  i) => {

    let listItems = {todoItems: list.todoItems, completedItems: list.completedItems}
    
    return (
        <li key={i} className='link-card' title={list.listDescription} onClick={() => setCurrentList(listItems)}>
            {list.listName}
        </li>
    )
    })
    
    return(
    <>
        {mappedData}
    </>
    )
}

export default ToDoListPicker