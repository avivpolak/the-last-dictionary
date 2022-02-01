import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Main from "./Main";
import PosPage from "./PosPage";
import Dictionary from "./Dictionary";
import Header from "./Header";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/part-of-speach/:pos" element={<PosPage />} />
                    <Route path="/" element={<Header />} />
                    <Route path="/:word" element={<Dictionary />} />
                    <Route path="/:word/:pos" element={<Dictionary />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
