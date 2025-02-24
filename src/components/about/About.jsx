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
                <img className="myFace" src={me} alt="my face smiling" />
                <p className="aboutInfo">
                Originally from Toronto, Canada I've lived in Malmö, Sweden for 5+ years.
                I am currently a student at Chas Academy studying Fullstack-Development. The course 
                is two years with the goal of proficiency in web development with a particular focus on Javascript,
                and Typescript. I have a special interest in accessible design because I feel the whole purpose of 
                technology is to make the world as accessible as possible for everyone. I’m looking for opportunities
                where I can learn and develop new skills.    
                </p>
            </section>
        </div>
        <Footer />
    </div>
    )
}