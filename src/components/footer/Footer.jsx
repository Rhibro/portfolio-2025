import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png"

export default function Footer() {
    return (
        <div className="footer">
        <p className="footerText">made by: rhiannon brönnimann 2025</p>
        <div className="iconBoxFooter">
            <a href="https://www.linkedin.com/in/rhiannon-br%C3%B6nnimann-a1a888a0/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} height={30} width={30} className="img-fluid footerImg" alt="LinkedIn icon" />
            </a>
            <a  href="https://github.com/Rhibro" target="_blank" rel="noopener noreferrer">
                <img src={github} height={30} width={30} className="img-fluid footerImg" alt="Git Hub icon" />
            </a>
        </div>
        </div>
    )
}