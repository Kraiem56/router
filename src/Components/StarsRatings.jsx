import React from 'react'

const StarsRatings = ({rating,handelRating}) => {
    const stars =(rating)=>{
        let tab=[]
        for(let i=1;i<=5;i++){
            if(i<=rating){
                tab.push(<span onClick={()=>handelRating(i)} style={{color:'gold',cursor:'pointer', fontSize:'25px'}}>★</span>)
            }else
            { tab.push(<span onClick={()=>handelRating(i)}  style={{cursor:'pointer', fontSize:'30px'}}>★</span>)
        }}
       
return tab
    }
  return (
    <div>{React.Children.toArray(stars(rating))}</div>
  )
}

export default StarsRatings