import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SearchBar.scss";
export default function SearchBar() {
    const nav = useNavigate();
    const searchInput = useRef(null);
    return (
        <form
            onSubmit={() => {
                {
                    searchInput.current.value
                        ? nav(`/word/${searchInput.current.value}`)
                        : nav("/");
                }
            }}
            className="search-box"
        >
            <input ref={searchInput} type="text" placeholder=" " />
            <button type="reset"></button>
        </form>
    );
}
