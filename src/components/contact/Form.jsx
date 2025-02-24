import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import aboutMe from "../../assets/aboutMe.jpg";

function Form(){
    return (
        <div className="myForm">
            <section className="contactInfoList">
                <img className="aboutMeimg" src={aboutMe}></img>
                <p className="formText">Based in Malmö, Sweden</p>
                <p className="email"><a href="mailto:rhibron@gmail.com">Email Me</a></p>
                <p className="formText">Connect with me:</p>
            </section>
                <div className="socialGroup">
                    <a className="socialBtnOne" href="https://github.com/Rhibro" target="_blank" rel="noopener noreferrer">
                        <img className="social" src={github} alt="github icon" ></img></a> 
                    <a className="socialBtnTwo" href="https://www.linkedin.com/in/rhiannon-br%C3%B6nnimann-a1a888a0/" target="_blank" rel="noopener noreferrer">
                        <img className="social" src={linkedin} alt="linkedin icon" ></img></a>
                </div>
        </div>
    );
};

export default Form;
