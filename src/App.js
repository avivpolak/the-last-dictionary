import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PosPage from "./AppComponents/PosPage";
import Dictionary from "./AppComponents/Dictionary";
import Home from "./AppComponents/Home";
import Random from "./AppComponents/Random";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/part-of-speach/:pos" element={<PosPage />} />  
                    <Route path="/" element={<Home />} />
                    <Route path="/word/:word" element={<Dictionary />} />
                    <Route path="/word/:word/:pos" element={<Dictionary />} />
                    <Route path="/random" element={<Random />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
