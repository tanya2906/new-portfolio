import Aos from 'aos';
import { useEffect, useRef, useState } from 'react';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import './Contact.css';
const Contact = () => {
    const form=useRef();
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    const [values,setValues]=useState({
        name:'',
        email:'',
        message:''
    });
    
    const change=(e)=>{
        const {name,value}=e.target;
        setValues({...values,[name]:value});
    }
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_l8vw44w', 'template_dqpzulv', form.current, {
            publicKey: '2WRfPZmDKvUAnVvuQ',
          })
          .then(
            () => {
                if(values.name===''||values.email===''||values.message==='')
                    {
                        alert('All fields are required.')
                    }
                    else{
                        alert('SUCCESS!');
                        setValues(
                            {
                                name:'',
                                email:'',
                                message:''
                            }
                        );
                        
                    }
             
              e.target.reset();
            },
            (error) => {
              alert('FAILED...', error.text);
            },
          );
      };
      
    
  return (
    <section id='contact' className='contact'>
        <h1  className="sectionTitle">Contact me</h1>
        <form ref={form} onSubmit={sendEmail}  action="">
            <div data-aos="fade-up" className="formGroup">
                <label htmlFor="name" hidden>Name</label>
                <input type="text" name="name" id="name" placeholder='Name' value={values.name} onChange={change} required/>
            </div>
            <div data-aos="fade-up" className="formGroup">
                <label htmlFor="email" hidden>Email</label>
                <input type="email" name="email" id="email" placeholder='Email' value={values.email} onChange={change} required/>
            </div>
            <div data-aos="fade-up" className="formGroup">
                <label htmlFor="message" hidden>Message</label>
                <textarea name="message" id="message" placeholder='Message' value={values.message} onChange={change} required></textarea>
            </div>
            <input data-aos="fade-up" className='hover btn' type="submit" value="Submit" />
        </form>
    </section>
  )
}

export default Contact