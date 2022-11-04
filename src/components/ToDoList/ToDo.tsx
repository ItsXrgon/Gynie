import React, { useEffect, useState } from 'react'
import { ReactComponent as Add } from '../icons/add_icon.svg'
import './ToDo.css'
import AddListForm from './AddListForm';
import ToDoListPicker from './ToDoListPicker';
import ToDoListItems from './ToDoListItems';

function ToDo() {

  // Add list form rendered or not
  const [addListForm, setaddListForm] = useState(false); 

   // Array of all different lists
  const [lists, setLists] = useState<{ listName: string; listDescription: string; todoItems: string[]; completedItems: string[]}[]>([])

  // 
  const [newList, setNewList] = useState<{
      listName: string;
      listDescription: string;
    }>({
      listName: '',
      listDescription: '',
  })

  // Current list to be shown
  const [currentList, setCurrentList] = useState<{
      todoItems: string[];
      completedItems: string[];
    }>({
      todoItems: [],
      completedItems: []
  })
  
  // Add new list to lists array
  const dispatchListSet = (payload: any) => {
    let oldArray = lists;
    let newList = { listName: payload.listName, listDescription: payload.listDescription, todoItems: [""], completedItems: [""]}
    let newArray = [...oldArray, newList];
    setLists(newArray);
    setNewList({listName: '', listDescription: ''})
  }

  // Store new data of lists after its been changed
  useEffect(() => {
    window.localStorage.setItem('lists', JSON.stringify(lists))
  }, [lists]);

  // Load lists data
  useEffect(() => {
    const data = window.localStorage.getItem('lists');
    if ( data !== null ) setLists(JSON.parse(data));
  }, []);

  return (
    <>
    <main>
      <div className='add-item'>
        <div className='input-item'>
          <input type="text" placeholder="Enter an activity..." id="item" />   
            <button className='add-task' title="Add Task" onClick={() => setaddListForm(current => !current)}>
              <Add className='Add'/>
            </button>
        </div>
      </div>
      <div className='todo-list-picker'>
        <div className='list'>
           <ul className='lists'>
             <ToDoListPicker lists={lists} setCurrentList={setCurrentList}/>
             <button title='Add ToDo List' onClick={() => setaddListForm(current => !current)}>
                <Add className='Add'/>
             </button>
           </ul>
        </div>
      </div>
      <div className='todo-list-view'>
        {addListForm && 
        <AddListForm 
          newList={newList} 
          lists={lists} 
          setNewList={setNewList} 
          dispatchListSet={dispatchListSet} 
          setaddListForm={setaddListForm}
          setCurrentList={setCurrentList}
        /> }
        <ul>
          <ToDoListItems list={currentList.todoItems} />
        </ul>
        <div>
          Completed:
        </div>
        <ul>
          <ToDoListItems list={currentList.completedItems} />
        </ul>
      </div>
    </main>
    </>
  )
}

export default ToDo