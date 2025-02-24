import Header from "../header/Header";
import Footer from "../footer/Footer";
import PortDataComponent from "./PortDataComponent";
import { PortData } from "./PortData";


export default function Portfolio() {
    return (
        <>
        <Header />
        <div className="portBody">
            <h1>Portfolio</h1>
            <div className="portInfoBox">
                {PortData.map((portItem) => <PortDataComponent key={portItem.pageLink} {...portItem}/>)}
            </div>
        </div>
        <Footer />
        </>
    )
}