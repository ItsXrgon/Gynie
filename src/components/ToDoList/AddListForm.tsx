import React from 'react'
import './AddListForm.css'

function AddListForm({
  newList,
  lists,
  setNewList,
  dispatchListSet,
  setaddListForm,
  setCurrentList
  }: {
    newList : { listName: string, listDescription: string;}, 
    lists : { listName: string; listDescription: string; todoItems: string[]; completedItems: string[] }[],
    setNewList : ( newList: { listName: string; listDescription: string; todoItems: string[]; completedItems: string[] }) => void,
    dispatchListSet : (payload: any) => void,
    setaddListForm : (payload: boolean) => void,
    setCurrentList : ( newList: { listName: string; listDescription: string; todoItems: string[]; completedItems: string[] }) => void,
  }) {

  function onSubmit(listName : string) {
    if (listName != "" && lists.length <= 6) {
      dispatchListSet(newList);
      setaddListForm(false);
      setCurrentList(lists[lists.length-1])
      //localStorage.setItem('ToDoLists', JSON.stringify(Lists))
    }
  };

  return (
    <>
    <div className='add-list-form-container'>
        <h1>
            Add ToDo List
        </h1>
        <form>
          <div className='input-field'>
            <label>
              List title:
            </label>
            <input 
            className='input-username'
             placeholder=''
              type='text' 
              value={newList.listName}
              maxLength={18}
              onChange={e => setNewList({
                ...newList, 
                listName: e.currentTarget.value, 
                todoItems: [],
                completedItems: []
              })}
              />
          </div>
          <div className='input-field'>
            <label>
              List Description:
            </label>
            <input 
            className='input-username' 
            placeholder='' 
            type='text'
            value={newList.listDescription}
            onChange={e => setNewList({
              ...newList, listDescription: e.currentTarget.value, todoItems: [],
              completedItems: []
            })}
            />
          </div>
        </form>
        <button type='submit' onClick={() => onSubmit(newList.listName)}>
          Add List
        </button>
    </div>
    </>
  )
}

export default AddListForm