import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = ({text,handelChange})=> {

  return (
    <div  className='blue'>  
      
      <ul>
        <Link to="/"><li>Home</li></Link>
      <form className='search'>
      <input className='EXPLOREZ' type="text" value={text} onChange={e=>handelChange(e.target.value)} />
      </form>
       
      <span className='thq'></span>
         
         <Link to="/Login"><li>Login</li></Link>
      </ul>
      <span className='thq'></span>
       </div>
   
  )
}

export default Navbar