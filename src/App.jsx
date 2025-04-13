import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import Modal from "./components/Modal.jsx";
import {useState} from "react";

export default function App() {
    const [isVisible, setIsVisible] = useState(false);
    const API_URL = 'http://127.0.0.1:8000/api';

    return (
        <>
            <Modal isVisible={isVisible} setIsVisible={setIsVisible} API_URL={API_URL}/>

            <div className="container">
                <Header/>

                <main>
                    <Main setIsVisible={setIsVisible} API_URL={API_URL}/>
                </main>

                <Footer/>
            </div>
        </>
    )
}