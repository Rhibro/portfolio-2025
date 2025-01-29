import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png"

export default function Footer() {
    return (
        <div className="footer">
        <p className="footerText">made by: rhiannon brönnimann 2025</p>
        <img src={linkedin} height={30} width={30} className="img-fluid footerImg" />
        <img src={github} height={30} width={30} className="img-fluid footerImg" />
        </div>
    )
}