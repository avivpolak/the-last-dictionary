import React from "react";
import { Link } from "react-router-dom";
export default function LinkedParagragh({ children }) {
    let words = children.split(" ");
    words = words.map((word) => word.replace(/[./,';!@#$%^&*()]/, ""));
    return (
        <div>
            {words.map((word) => {
                return <Link style={{ textDecoration: 'none' }} to={`/${word}`}>{word + " "}</Link>;
            })}
        </div>
    );
}
