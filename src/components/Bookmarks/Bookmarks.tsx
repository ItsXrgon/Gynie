import React, { useEffect, useState } from 'react'
import './Bookmarks.css'
import LinkCard from './LinkCard'
import BookmarksLogo from '../icons/Bookmark-logo.png'

function BookmarkAdd() {
    
    const [cardData, setCardData] = useState<string[]>([])

    const [newCard, setNewCard] = useState({
    linkName: '',
    linkHref: '', 
    LinkDescription: ''
    })

  const dispatchCardSet = (payload: any) => {
    let oldArray = cardData;
    let newArray = [...oldArray, payload];
    setCardData(newArray);
    setNewCard({linkName: '', linkHref: '', LinkDescription: ''} )
  }

  function removeBookmark(index : number) {
    setCardData(cardData => {
        return cardData.filter((_item, i) => i !== index)
    })
  }
  
  function onSubmit() {
    if (newCard.linkName != "" && newCard.linkHref != "") {
        dispatchCardSet(newCard);
    }
  };

  useEffect(() => {
    window.localStorage.setItem('bookmarks', JSON.stringify(cardData))
  }, [cardData]);

  useEffect(() => {
    const data = window.localStorage.getItem('bookmarks');
    if ( data !== null ) setCardData(JSON.parse(data));
  }, []);


  return (
    <>
    <main className='bookmarks'>
    <div className='bookmark-add'>
        <img src={BookmarksLogo} alt='Bookmark logo'/>
        <form onSubmit={e => e.preventDefault()}>
            <h2 className='form-title'>
                Add Bookmark
            </h2>
            <div>
                <label htmlFor='link-title' className='form-label'>
                    Bookmark Name:
                </label>
                <textarea className='name-input'
                value={newCard.linkName}
                onChange={e => setNewCard({...newCard, linkName: e.currentTarget.value})}
                name='link-title'
                cols={40}
                rows={1}
                minLength={3} 
                maxLength={25} 
                placeholder='Name - Required' />
            </div>
            <div>
                <label htmlFor='link-href' className='form-label'>
                    Bookmark URL:
                </label>
                <textarea
                value={newCard.linkHref}
                onChange={e => setNewCard({...newCard, linkHref: e.currentTarget.value})}
                name='link-href'  
                cols={40}
                rows={2}
                minLength={7}
                placeholder='https://Link - Required'/>
            </div>
            <div>
                <label htmlFor='link-title' className='form-label'>
                    Bookmark Description:
                </label>
                <textarea 
                value={newCard.LinkDescription}
                onChange={e => setNewCard({...newCard, LinkDescription: e.currentTarget.value})}
                name='link-description' 
                cols={40}
                rows={7} 
                maxLength={160}
                placeholder='Description - Optional' />
            </div>
            <button type='submit' onClick={() => onSubmit()}>Add Bookmark</button>
        </form>
    </div>
    <div className='bookmark-view'>
        <LinkCard cards={cardData} removeBookmark={removeBookmark}/>
    </div>
    </main>
    </>
  )
}

export default BookmarkAdd