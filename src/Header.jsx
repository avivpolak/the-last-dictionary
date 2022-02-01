import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const nav = useNavigate();
    const searchInput = useRef(null);
    return (
        <div>
            <input
                type={"text"}
                placeholder={"search"}
                ref={searchInput}
            ></input>
            <button
                onClick={() => {
                    nav(`/${searchInput.current.value}`);
                }}
            >
                Go for a search!
            </button>
            <button onClick={() => nav(-1)}>go back</button>
            <button onClick={() => nav(1)}>go forword</button>
        </div>
    );
}
