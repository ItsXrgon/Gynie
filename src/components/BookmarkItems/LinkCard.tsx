import React from 'react'
import { ReactComponent as Remove } from '../BookmarkItems/remove_icon.svg'

function checkLink(link : string) {
    if(link.startsWith('https://')){
        return link
    } else {
        return `https://${link}`
    }
}

function removeSubDirectories(link : string) {
    link = link.replace("https://", "")
    let pathArray: string = link.split('/')[0]
    link = "https://" + pathArray

    return link
}

const LinkCard = ({
    cards,
    removeBookmark
    }:{ 
    cards: any[],
    removeBookmark : (i : number) => void
    }) => {

    const mappedData = cards.map((card,  i) => {

    return (
        <div key={i} className='link-card'>
            <div className='link-card-image' style={{backgroundImage: `url("https://logo.clearbit.com/${removeSubDirectories(card.linkHref)}")`}}/>
                <div className='link-card-link'>
                    <h2>
                        <a href={checkLink(card.linkHref)}>
                            {card.linkName}
                        </a>
                    </h2>
                    <div className='link-card-description'>
                        {card.LinkDescription}
                    </div>
                </div>
                <div className='button-container' onClick={() => removeBookmark(i)}>
                    <Remove className='logo'/>
                </div>
        </div>
    )
    })
    
    return(
    <>
        {mappedData}
    </>
    )
}

export default LinkCard

