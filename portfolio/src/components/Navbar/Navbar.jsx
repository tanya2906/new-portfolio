import {Link} from 'react-scroll';
import './Navbar.css'

const Navbar = () => {
   
  return (
    <section className="navbar">
        <nav className='nav-container'> 
           <Link to="home" spy={true} smooth={true} offset={-100} duration={500} >Home</Link>
           <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} >Projects</Link>
           <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} >Skills</Link>
           <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} >Contact</Link>
           
       </nav>
    </section>
    
  )
}

export default Navbar