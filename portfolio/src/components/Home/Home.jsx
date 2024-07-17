import './Home.css';
import myImg from '../../assets/my-img.png';
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { MdDarkMode,MdLightMode } from "react-icons/md";
import { useState ,useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Resume from '../../assets/resume.pdf';
import {useTheme} from '../../common/ThemeContext'; 
const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 6000 });
      }, []);
    const {theme,toggleTheme}=useTheme();
    const [mode,setMode]=useState('light');
  return (
    <section id='home' className='container section'>
        <div className='img-mode'>
            <img data-aos="zoom-in" className='mypic' src={myImg} alt="profile picture of Tanya Saini" />
            
            <i data-aos="fade-left" className='mode' onClick={toggleTheme}>
                { mode==='light'?<MdDarkMode className='mode-icon' onClick={()=>setMode('dark')}/>:<MdLightMode className='mode-icon' onClick={()=>setMode('light')}/>} 
            </i>
            
        </div>
        <div  className='info'>
            <h1 data-aos="fade-up" className='name'>Tanya Saini</h1>
            <h2 data-aos="fade-up" className='title'>Frontend Developer</h2>
            
            <span data-aos="fade-up">
                <a data-aos="zoom-in" href="https://github.com/tanya2906" target='_blank'>
                    <i >
                        <FaGithub />
                    </i>
                </a>
                <a data-aos="zoom-in" href="https://www.linkedin.com/in/tanya-saini-39797524b/" target='_blank'>
                    <i >
                        <FaLinkedin />
                    </i>
                </a>
                
            </span>
            
            <p data-aos="fade-up" className='description'>I am a frontend developer with a passion for building amazing user experiences
                and creating beautiful interfaces.
            </p>
            <a data-aos="fade-up" href={Resume} download>
                <button data-aos="fade-up" className='button'>Resume</button>
            </a>    
            
        </div>
    </section>
  )
}

export default Home