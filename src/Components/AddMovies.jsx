import React, { useState } from 'react'
import Modal from 'react-modal';
import './AddMovies.css'
import StarsRatings from './StarsRatings';


const AddMovies = ({handelAdd}) => {
  const [title, setTitle] = useState("")
  const [posterURL, setPosterURL] = useState("")
  const [discription, setDiscription] = useState("")
  const [year, setYear] = useState("")
  const [rating, setRating ] = useState("")
  const handelRating=(x)=>{
    setRating(x)

  }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#root');
   
        const [modalIsOpen, setIsOpen] = React.useState(false);
      
        function openModal() {
          setIsOpen(true);
        }
        function closeModal() {
          setIsOpen(false);
        }
        const handelSubmit =(e)=>{
          const newMovie={title,posterURL,discription,year,rating}
          e.preventDefault()
          handelAdd(newMovie)
          closeModal("")
          setTitle("")
          setPosterURL("")
          setDiscription("")
          setYear("")
          setRating("")

      }
  return (
    <div>
        <button className='ad0d' onClick={openModal}>Add</button>
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className="Modal" onSubmit={handelSubmit}>
           <label htmlFor="Movie title">Movie title</label> <br />
           <input type="text" value={title} onChange={e=>setTitle(e.target.value)} /> <br />
           <label htmlFor="PosterUrl">PosterURLl</label> <br />
           <input type="text" value={posterURL} onChange={e=>setPosterURL(e.target.value)} /> <br />
           <label htmlFor="Discription">Discription</label> <br />
           <input type="text" value={discription} onChange={e=>setDiscription(e.target.value)}/> <br />
           <label htmlFor="Year">Year</label> <br />
           <input type="Number" value={year} onChange={e=>setYear(e.target.value)}/> <br />
           <br />
                      <span className='rat'><StarsRatings rating={rating} handelRating={handelRating} /></span>
           <span className='ptn'>
             <button type='submit' >Confirm</button>
           <button>cancel</button></span>
        </form> 
      </Modal>
    </div>
  )
}

export default AddMovies