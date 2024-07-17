import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
const ProjectCard = ({src,href,projectName,projectType}) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    
    <a href={href} target='_blank'>
        <img data-aos="fade-up" className='hover' src={src} alt={`${projectName} logo`} />
        <h3 data-aos="fade-up">{projectName}</h3>
        <p data-aos="fade-up">{projectType}</p>
    </a>
  )
}

export default ProjectCard
