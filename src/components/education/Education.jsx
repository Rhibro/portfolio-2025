import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";


export default function Education() {
    return (
        <>
        <Header />
        <div className="eduBody"> 
            <h1>Education</h1>
            <div className="eduInfoBox">
            <div className="eduBox">
                    <h3 className="schoolName">
                        Chas Academy 
                    </h3>
                    <p className="timePlace">
                        Sept 2024 - June 2026 || Malmö, Sweden
                    </p>
                    <p className="eduInfo">
                        In this two-year training the goal is to become proficient in web development with a 
                        particular focus on Javascript and Typescript. The program also gives you in-depth 
                        knowledge in technical frameworks such as React.js, Vue.js, backend development in 
                        Node.js to create APIs, and work against different databases.
                    </p>
                    <div>
                        <Link to={{pathname:
                            "https://chasacademy.se/program/fullstackutvecklare-javascript"}}
                            target="_blank" className="schoolLink">
                            More Information
                        </Link>
                    </div>
               </div>
               <div className="eduBox">
                    <h3 className="schoolName">
                        Kvarnby Folkhögskola
                    </h3>
                    <p className="timePlace">
                        Jan 2024 - June 2024 || Malmö, Sweden
                    </p>
                    <p className="eduInfo">
                        This course has a focus on the subject of Swedish as a second language. 
                        The program includes contemporary Swedish history,
                        academic writing, and work themed projects.   
                    </p>
                    <div>
                   <Link to={{pathname:
                            "https://www.kvarnby.se/kurser/akademikerkursen/"}}
                            target="_blank" className="schoolLink">
                            More Information
                        </Link>
                   </div>
               </div>
               <div className="eduBox">
                    <h3 className="schoolName">
                            Sundsgården Folkhögskola
                    </h3>
                    <p className="timePlace">
                        Aug 2022 - Jan 2023 || Helsingborg, Sweden
                    </p>
                    <p className="eduInfo">
                        IT-Tech for Women is an intensive coding course. The program has a focus on 
                        practical skills as well as working in group settings. The program consists 
                        of: programing foundations, programming in depth, responsive web design, 
                        accessible web design, individual & group projects.
                    </p>
                   <div>
                        <Link to={{pathname:
                            "https://sundsgarden.se/utbildningar-kurser/langa-kurser/distanskurser/it-tech-for-women/"}}
                            target="_blank" className="schoolLink">
                            More Information
                        </Link>
                   </div>
               </div>
               <div className="eduBox">
                    <h3 className="schoolName">
                        Humber College
                    </h3>
                    <p className="timePlace">
                        Sept 2011 - June 2014 || Toronto, Canada
                    </p>
                    <p className="eduInfo">
                        The Theatre Performance program is an interdisciplinary training with 
                        emphasis on physical movement, writing, collaborations with large 
                        ensembles, set design, and devised creation.
                    </p>
                    <div>
                   <Link to={{pathname:
                            "https://humber.ca/"}}
                            target="_blank" className="schoolLink">
                            More Information
                        </Link>
                   </div>
               </div>
            </div>
        </div>
        <Footer />
        </>
    )
}