import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import { useState } from "react";
import React from "react";

export default function Form() {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { email, message } = e.target.elements
        let conFon = {
            email: email.value,
            message: message.value,
        }
        console.log(conFon);
    }
    
    return (
        <div className="myForm">
             <form onSubmit={onSubmit}>
                <div className="labelInput">
                    <label htmlFor="email">
                        email:
                    </label>
                    <input className="inPut" type="email" id="email" required />
                </div>
                <div className="labelInput">
                    <label htmlFor="message">
                    message:
                    </label>
                    <textarea className="textArea" id="message" required />
                </div>
            <button className="formBtn" type="submit">
                {formStatus}
            </button>
                <div className="socialGroup">
                    <a className="socialBtnOne" href="https://github.com/Rhibro" target="_blank" rel="noopener noreferrer">
                        <img className="social" src={github} alt="github icon" ></img></a> 
                    <a className="socialBtnTwo" href="https://www.linkedin.com/in/rhiannon-br%C3%B6nnimann-a1a888a0/" target="_blank" rel="noopener noreferrer">
                        <img className="social" src={linkedin} alt="linkedin icon" ></img></a>
                </div>
            </form>
        </div>
    )
}