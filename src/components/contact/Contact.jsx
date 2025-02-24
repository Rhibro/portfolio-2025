import Header from "../header/Header";
import Footer from "../footer/Footer";
import Form from "./Form";

export default function Contact() {
    return (
        <>
        <Header />
        <div className="contactBody">
            <h1>Contact</h1>
            <Form />
        </div>
        <Footer />
        </>
    )
}