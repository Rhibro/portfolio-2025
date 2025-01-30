import Header from "../header/Header";
import Footer from "../footer/Footer";
import { EduData } from "./EduData";
import EduDataComponent from "./EduDataComponent";

export default function Education() {
    return (
        <>
        <Header />
        <div className="eduBody"> 
            <h1>Education</h1>
            <div className="eduInfoBox">
                {EduData.map((edItem) => <EduDataComponent key={edItem.schoolName} {...edItem}/>)}
            </div>
        </div>
        <Footer />
        </>
    )
}