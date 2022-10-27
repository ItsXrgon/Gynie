import React from 'react'

const ToDoListPicker = ({
    lists,
    setCurrentList
    } : {
    lists : { listName: string; listDescription: string; todoItems: string[]; completedItems: string[] }[],
    setCurrentList : ( newList: { listName: string; listDescription: string; todoItems: string[]; completedItems: string[] }) => void
    }) => {

    const mappedData = lists.map((list,  i) => {

    return (
        <li key={i} className='link-card' title={list.listDescription} onClick={() => setCurrentList(list)}>
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