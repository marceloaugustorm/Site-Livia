import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import SobreEla from "./components/sobreela";
import Macarrao  from "./components/macarrao";
import Fotos from "./components/fotos"
import Momentos from "./components/momentos" 
import "./App.css"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<SobreEla />} />
                <Route path="/macarrao" element={<Macarrao/>}/>
                <Route path="/foto" element={<Fotos/>}/>
                <Route path="/momentos" element={<Momentos/>}/>
            </Routes>
        </Router>
    );
};

export default App;
