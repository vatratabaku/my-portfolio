import ContactLayout from "../components/ContactLayout";
import Navbar from "../components/Navbar";
import "../components/css/contactLayout.css";


function Contact() {
    return (  
        <div className="container">
            <Navbar></Navbar>
            <ContactLayout></ContactLayout>
        </div>
    );
}

export default Contact;


