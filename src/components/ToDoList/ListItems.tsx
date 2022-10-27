import React from 'react'
import { ReactComponent as Complete } from '../icons/remove_icon.svg'
import { ReactComponent as Remove } from '../icons/remove_icon.svg'
import { ReactComponent as Subtask } from '../icons/remove_icon.svg'

const ListItems = (props: { items: any[] }) => {

    const mappedData = props.items.map((items,  i) => {

    return (
        <li className='todo-list-item'>
            aaaaaa
            <div className='todo-list-item-buttons'>
              <button>
                <Complete />
              </button>
              <button>
                <Subtask />
              </button>
              <button>
                <Remove />
              </button>
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

export default ListItems