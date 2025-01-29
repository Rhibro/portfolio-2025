import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// images
import game from "../../assets/game.svg";
import notebook from "../../assets/notebook.svg";
import briefcase from "../../assets/briefcase.svg";
import chat from "../../assets/chat.svg";

export default function Home() {
    return (
         <div>
              <h1>Rhiannon Brönnimann</h1>
              <h2>Full Stack Developer</h2>
              <main>
                <Link to="/about" >
                    <img src={game} height={230} width={230} className="img-fluid About" />
                    <h3>About</h3>
                </Link>
                <Link to="/education" >
                    <img src={notebook} height={230} width={230} className="img-fluid Education" />
                    <h3>Education</h3>
                </Link>
                <Link to="/portfolio" >
                    <img src={briefcase} height={230} width={230} className="img-fluid Portfolio" />
                    <h3>Portfolio</h3>
                </Link>
                <Link to="/contact" >
                    <img src={chat} height={230} width={230} className="img-fluid Contact" />   
                    <h3>Contact</h3>
                </Link>
              </main>
            </div>
    )
}