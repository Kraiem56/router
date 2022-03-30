
import { useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import { moviesData } from './Components/Data';
import Navbar from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AddMovies from './Components/AddMovies';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import Info from './Components/Info';


function App() {
  const [movies, setMovies] = useState(moviesData)
  const [text, setText] = useState('')
 
  const handelDeleted=(id)=>{
    setMovies(movies.filter(movie=>movie.id!==id))
  }
  const handelAdd=(newMovie)=>{
    setMovies([...movies,newMovie])
  }
  const handelChange=(x)=>{
    setText(x)
 
  }
  return (
    <div className='body'>
        <Router>
        <Navbar handelChange={handelChange} text={text}/>
      <Routes>
        <Route path='/' element={<CardList  data={movies.filter(el=>el.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()))} handelAdd={handelAdd} deletedMovies={handelDeleted}/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/info/:id" element={<Info movies={movies}/>} />
      </Routes>

    </Router>
        
   
    </div>
  );
}

export default App;

   