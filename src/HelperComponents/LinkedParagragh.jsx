import React from "react";
import StyledLink from "./StyledLink";

export default function LinkedParagragh({ children }) {
    let words = children.split(/(\w+)/);
    return (
        <div>
            {words.map((word,i) => {
                return word.match(/\w+/) ? (
                    <StyledLink key={i} to={`/word/${word}`}>{word}</StyledLink>
                ) : (
                    <span key={i}>{word}</span>
                );
            })}
        </div>
    );
}
