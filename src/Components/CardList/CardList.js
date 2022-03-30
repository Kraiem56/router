import React from 'react'
import AddMovies from '../AddMovies'
import CardMovies from '../Card/CardMovies'
import './CardList.css'
const CardList = ({data,deletedMovies,handelAdd}) => {
  return (
    <div className='add'>
      <div className='vv'>
        {React.Children.toArray(data.map(el=> <CardMovies  infos={el} del={deletedMovies}/>))}
        
        
    </div>
    
    <div className='bund'>
<AddMovies handelAdd={handelAdd} />
    </div>
    </div>
  )
}

export default CardList