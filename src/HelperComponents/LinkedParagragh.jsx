import React from "react";
import StyledLink from "./StyledLink";

export default function LinkedParagragh({ children }) {
    let words = children.split(/(\w+)/);
    return (
        <div>
            {words.map((word) => {
                return word.match(/\w+/) ? (
                    <StyledLink to={`/word/${word}`}>{word}</StyledLink>
                ) : (
                    <span>{word}</span>
                );
            })}
        </div>
    );
}
