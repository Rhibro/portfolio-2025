import Header from "../header/Header";
import Footer from "../footer/Footer";
import me from "../../assets/me.jpg";

export default function About() {
    return (
    <div>
        <Header />
        <div className="aboutBody">
            <div className="titleBox">
                <h1>About</h1>
            </div>
            <section className="aboutInfoBox">
                <img className="myFace" src={me} alt="me standing and smiling with an old harbour behind me on a sunny day" />
                <p className="aboutInfo">
                Originally from Toronto, Canada; I’ve always had a love for travel. After many adventures, 
                I’ve settled in Malmö, Sweden for the past six years. I am currently a student at 
                Chas Academy completeing their 2-year Fullstack-Development course. At the time of my graduation (June 2026)
                I will be proficient in web development with a particular focus on Javascript, and Typescript. 
                I have a strong interest in accessible design, driven by my belief that technology should make 
                the world more inclusive for everyone. I’m eager to explore new opportunities, apply and expand my 
                skills, and continue learning to make a meaningful impact.
                </p>
            </section>
        </div>
        <Footer />
    </div>
    )
}