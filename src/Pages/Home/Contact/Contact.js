import React, { useRef, useState } from 'react';
import './Contact.css'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { MdLocationCity } from 'react-icons/md';
import emailjs from 'emailjs-com'

const Contact = () => {
    const formRef = useRef();
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
    // service_f3sfu0a
        e.preventDefault();
        emailjs.sendForm('service_bhz77vf', 'template_myeoq4t', formRef.current, 'user_jOhaVnv8ZAtD5s8XegMVP')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
      }, (error) => {
          console.log(error.text);
      });
        e.target.reset();
    }
    return (
        <div id="contactme" className="contact mb-12">
            <div className="contact-bg">
                <div className="wrapper">
                    <div className="leftside">
                        <h1 className="text-4xl font-bold mb-4 title text-red-500"> Contact Info </h1>
                            <div className="info">
                                <div className="infoItem text-white mt-5">
                                    <AiFillPhone />
                                    
                                    <p>+88 017***1 2***</p>
                                </div>
                                <div className="infoItem text-white mt-5">
                                    <AiOutlineMail />
                                   <p>hnaim6979@gmail.com</p> 
                                </div>
                                <div className="infoItem text-white mt-5">
                                    <MdLocationCity />
                                   <p> Bogura,Rajshahi Bangladesh</p>
                                </div>
                            </div>
                        
                    </div>
                    <div className="rightside">
                        <div>
                        <p className="text-4xl text-red-500 font-bold text-center mb-2 mt-10">Email</p>
                            <form ref={formRef} onSubmit={handleSubmit}>
                                <input type="text" placeholder="Name" name="user_name"/> <br />
                                <input type="text" placeholder="Subject" name="user_Subject"/> <br />
                                <textarea name="" id="" cols="43" rows="5" placeholder="your message" /> <br />
                                <input type="email" placeholder="Email" name="user_email" /> <br />
                                <button className="bg-red-500 mt-4 rounded-sm text-white py-2 px-4" type="submit">Submit</button>
                                {success && <p className="text-green-600">Successfully Submitted</p>}
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Contact;