import Header from "../header/Header";
import Footer from "../footer/Footer";
import AboutMeImg from "../../assets/AboutMeImg.jpg";


export default function About() {
    return (
    <div>
        <Header />
        <div className="aboutBody">
            <div className="titleBox">
                <h1>About</h1>
            </div>
            <section className="aboutInfoBox">
                <img className="myFace" src={AboutMeImg} loading="lazy" alt="me standing and smiling with an old harbour behind me on a sunny day" />
                <section className="aboutInfo">
                    <p className="aboutText">
                        I’m a full-stack developer with a strong focus on frontend development, building clean, user-friendly web applications with modern technologies.
                    </p>
                    <p className="aboutText">
                        I primarily work with React, TypeScript, & JavaScript, and have experience across the stack using Node.js, Express, and SQL, as well as contributing to backend systems with C# and .NET. I enjoy working on both the technical and user-facing sides of development, creating solutions that are not only functional but intuitive to use.
                    </p>
                    <p className="aboutText">
                        Through my internships and professional experience, I’ve worked on real-world systems — from improving user flow and structure on production websites to contributing to data-driven applications in the energy sector.
                    </p>
                    <p className="aboutText">
                        I’m particularly interested in building accessible, well-designed applications and writing clean, maintainable code. I’m currently looking for opportunities where I can continue growing as a full-stack developer and contribute to meaningful projects.
                    </p>
                    <p className="aboutText">
                        Originally from Toronto, Canada and after 7 years in Malmö, Sweden it's starting to feel like home (Ja, jag kan svenska). I am a dual citizen (Canada/Switzerland) therefore can work freely in the EU.  
                    </p>
                </section>
            </section>
        </div>
        <Footer />
    </div>
    )
}