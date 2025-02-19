import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import { useState } from "react";
import React from "react";
import emailjs from "emailjs-com";

// export default function Form() {
//     const [formStatus, setFormStatus] = React.useState('Send')
//     const onSubmit = (e) => {
//         e.preventDefault()
//         setFormStatus('Submitting...')
//         const { email, message } = e.target.elements
//         let conFon = {
//             email: email.value,
//             message: message.value,
//         }
//         console.log(conFon);
//     }
    
const Form = () => {
    const [formData, setFormData] = useState({
        email: "",
        message: "",
    });

    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_ogqb47i", //service ID
            "", //email template
            "", //emailjs user ID
        )
        .then (
            (response) => {
                setStatusMessage("Message sent successfully!");
                setFormData({ email: "", message: ""});
            },
            (error) => {
                setStatusMessage("Failed to send message. Please try again.");
            }
        );
    };


    return (
        <div className="myForm">
            {statusMessage && <p>{statusMessage}</p>}
             <form onSubmit={handleSubmit}>
                <div className="labelInput">
                    <label htmlFor="email">
                        email:
                    </label>
                    <input 
                        className="inPut" 
                        type="email" 
                        name="email"
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="labelInput">
                    <label htmlFor="message">
                    message:
                    </label>
                    <textarea 
                        className="textArea" 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required 
                    />
                </div>
            <button className="formBtn" type="submit">
                Submit
            </button>
                <div className="socialGroup">
                    <a className="socialBtnOne" href="https://github.com/Rhibro" target="_blank" rel="noopener noreferrer">
                        <img className="social" src={github} alt="github icon" ></img></a> 
                    <a className="socialBtnTwo" href="https://www.linkedin.com/in/rhiannon-br%C3%B6nnimann-a1a888a0/" target="_blank" rel="noopener noreferrer">
                        <img className="social" src={linkedin} alt="linkedin icon" ></img></a>
                </div>
            </form>
        </div>
    );
};

export default Form;

// import github from "../../assets/github.png";
// import linkedin from "../../assets/linkedin.png";
// import { useState } from "react";
// import React from "react";

// export default function Form() {
//     const [formStatus, setFormStatus] = React.useState('Send')
//     const onSubmit = (e) => {
//         e.preventDefault()
//         setFormStatus('Submitting...')
//         const { email, message } = e.target.elements
//         let conFon = {
//             email: email.value,
//             message: message.value,
//         }
//         console.log(conFon);
//     }
    
//     return (
//         <div className="myForm">
//              <form onSubmit={onSubmit}>
//                 <div className="labelInput">
//                     <label htmlFor="email">
//                         email:
//                     </label>
//                     <input className="inPut" type="email" id="email" required />
//                 </div>
//                 <div className="labelInput">
//                     <label htmlFor="message">
//                     message:
//                     </label>
//                     <textarea className="textArea" id="message" required />
//                 </div>
//             <button className="formBtn" type="submit">
//                 {formStatus}
//             </button>
//                 <div className="socialGroup">
//                     <a className="socialBtnOne" href="https://github.com/Rhibro" target="_blank" rel="noopener noreferrer">
//                         <img className="social" src={github} alt="github icon" ></img></a> 
//                     <a className="socialBtnTwo" href="https://www.linkedin.com/in/rhiannon-br%C3%B6nnimann-a1a888a0/" target="_blank" rel="noopener noreferrer">
//                         <img className="social" src={linkedin} alt="linkedin icon" ></img></a>
//                 </div>
//             </form>
//         </div>
//     )
// }