import React from 'react'
import {useParams } from "react-router-dom";
import './Info.css'
import StarsRatings from './StarsRatings';

const Info = ({movies}) => {
  // console.log(movies)
  const {id}= useParams()
  console.log(id)
  const item=movies.find(el=>el.id==id)
  
  return (
    <div>
<div id="card_container" movies-offset={2}>
  <div className="pg">
  <img src={item.posterURL} alt="" />
  </div>
  <div id="card">
    <div className="shine" />
    <div className="text-block">
      <h1>{item.title} <small>{item.year}</small></h1>
      <h3>Action | Adventure</h3>
      <p>{item.description}      </p>
      <button>movies Trailer</button>
      <StarsRatings rating={item.rating}/>
    </div>
  </div>
</div>


    </div>
  )
}
export default Info