import React from "react";
import StyledLink from "./StyledLink";



export default function LinkedParagragh({ children }) {
    let words = children.split(" ");
    words = words.map((word) => word.replace(/[./,';!@#$%^&*()]/, ""));
    return (
        <div>
            {words.map((word) => {
                return <StyledLink style={{ textDecoration: 'none' }} to={`/${word}`}>{word + " "}</StyledLink>;
            })}
        </div>
    );
}
