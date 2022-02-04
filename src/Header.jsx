import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
export default function Header() {
    const nav = useNavigate();
    const searchInput = useRef(null);
    return (
        <form
            onSubmit={() => {
                nav(`/${searchInput.current.value}`);
            }}
            className="search-box"
        >
            <input ref={searchInput} type="text" placeholder=" " />
            <button type="reset"></button>
        </form>
    );
}
