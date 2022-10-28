import React from 'react'

function UnitListItem({
    unitName,
    selected,
    setSelected,
    title
    }:{
    unitName: string,
    selected: string,
    setSelected: (unitName: string) => void,
    title?: string
    }) {

    let itemSelected = false
    if(selected === unitName){
        itemSelected = true
    }

  return (
    <li 
        onClick={() => {
            setSelected(unitName);
        }}
        title={title}
        className={"unit-list-item" + (itemSelected ? "-selectedItem" : "")}>
        {unitName}
    </li>
  )
}

export default UnitListItem