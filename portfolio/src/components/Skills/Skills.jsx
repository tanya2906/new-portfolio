import { useEffect } from 'react';
import './Skills.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SkillList from '../../common/SkillList';
const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section  id='skills' className='skills section'>
        <h1  className='sectionTitle'>Skills</h1>
        <div data-aos="fade-up" className='skillList'>
            <SkillList skill='HTML'data-aos="fade-up"/>
            <SkillList skill='CSS'data-aos="fade-up"/>
            <SkillList skill='JavaScript' data-aos="fade-up"/>
            <SkillList skill='C++' data-aos="fade-up"/>
        </div>
        <hr data-aos="fade-up" />
        <div data-aos="fade-up" className='skillList'>
            <SkillList skill='React' data-aos="fade-up"/>
            <SkillList skill='Tailwind CSS' data-aos="fade-up"/>
        </div>
        <hr data-aos="fade-up" />
        <div data-aos="fade-up" className='skillList'>
            <SkillList skill='Git' data-aos="fade-up"/>
            <SkillList skill='Figma' data-aos="fade-up"/>
        </div>
        
    </section>
  )
}

export default Skills