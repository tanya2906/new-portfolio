import './Project.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import theshimlaroutes from '../../assets/theshimlaroutes.png'
import foodyzone from '../../assets/foodyzone.png';
import ProjectCard from '../../common/ProjectCard';
const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section  id='projects' className='projects section'>
        <h1  className='sectionTitle'>Projects</h1>
        <div  className="projectsContainer">
            <ProjectCard src={theshimlaroutes} href="https://the-shimla-routes.netlify.app/" projectName="The Shimla Routes" projectType="React Website"/>
            <ProjectCard src={foodyzone} href="https://github.com/tanya2906/FOODY_ZONE" projectName="Foody Zone" projectType="React Frontend"/>
        </div>
    </section>
  )
}

export default Projects