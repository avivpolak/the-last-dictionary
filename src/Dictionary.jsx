import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

export default function Dictionary() {
    return (
        <div>
            <Header />
            <Main />
        </div>
    );
}
