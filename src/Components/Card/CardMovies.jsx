import React from 'react'
import { Button } from 'react-bootstrap'
import './CardMovies.css'
import StarsRatings from '../StarsRatings';
import { Link } from 'react-router-dom';

const Card = ({infos,del}) => {
  
    return(
      <div className='centre'>
        <div className='movie' style={{backgroundImage: `url(${infos.posterURL})`}}>
             
             <h2 className='movie__title'>{infos.title} {infos.year}</h2>
             <span className='movie__description'>{infos.description}</span>
                   <span className='movie__rating'><StarsRatings  rating={infos.rating}/></span>
             <div>
              
              <Link to= {`/info/${infos.id}`}> <Button className='movie__imdb-button ' variant='primary'> info</Button></Link>
             </div>
           </div>
             <span ><Button variant="danger" onClick={()=>del(infos.id)}>DELETED</Button></span>
      </div>
    )
  } 

export default Card