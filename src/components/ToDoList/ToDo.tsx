import React, { useEffect, useState } from 'react'
import { ReactComponent as Add } from '../icons/add_icon.svg'
import './ToDo.css'
import AddListForm from './AddListForm';
import ToDoListPicker from './ToDoListPicker';
import ToDoListItems from './ToDoListItems';

function ToDo() {

  const [addListForm, setaddListForm] = useState(false);

  function openAddList() {
    setaddListForm(current => !current);
  }

  const [lists, setLists] = useState<{ listName: string; listDescription: string; todoItems: string[]; completedItems: string[]}[]>([])

  const [newList, setNewList] = useState<{
      listName: string;
      listDescription: string;
      todoItems: string[];
      completedItems: string[];
    }>({
      listName: '',
      listDescription: '',
      todoItems: [],
      completedItems: []
  })

  const [currentList, setCurrentList] = useState<{
      listName: string;
      listDescription: string;
      todoItems: string[];
      completedItems: string[];
    }>({
      listName: '',
      listDescription: '',
      todoItems: [""],
      completedItems: []
  })

  function addItem() {
    setaddListForm(current => !current);
  }

  const dispatchListSet = (payload: any) => {
    let oldArray = lists;
    let newArray = [...oldArray, payload];
    setLists(newArray);
    setNewList({listName: '', listDescription: '', todoItems: [], completedItems: []} )
  }

  useEffect(() => {
    window.localStorage.setItem('lists', JSON.stringify(lists))
  }, [lists]);

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
            <button className='add-task' title="Add Task" onClick={addItem}>
              <Add className='Add'/>
            </button>
        </div>
      </div>
      <div className='todo-list-picker'>
        <div className='list'>
           <ul className='lists'>
             <ToDoListPicker lists={lists} setCurrentList={setCurrentList}/>
             <button title='Add ToDo List' onClick={openAddList}>
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
        <ul>
          <ToDoListItems list={currentList.completedItems} />
        </ul>
      </div>
    </main>
    </>
  )
}

export default ToDo