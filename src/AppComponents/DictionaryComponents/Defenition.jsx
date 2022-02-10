import React from "react";
import LinkedParagragh from "../../HelperComponents/LinkedParagragh";

export default function Defenition({word,pos, synonyms, definitions  }) {
    if (!definitions) definitions = ["no definitions"];
    if (!synonyms) synonyms = ["no synonyms"];
    return (
        <div>
            <h1>
                <LinkedParagragh>{word}</LinkedParagragh>
            </h1>
            <h4>
                <LinkedParagragh>{pos}</LinkedParagragh>
            </h4>
            <h2>
                <LinkedParagragh>definitions</LinkedParagragh>
            </h2>

            {definitions.map((def, i) => (
                <LinkedParagragh key={i}>{def}</LinkedParagragh>
            ))}
            <br />
            <h2>
                <LinkedParagragh>synonyms</LinkedParagragh>
            </h2>
            {synonyms.map((syn,i) => (
                <LinkedParagragh key={i}>{syn}</LinkedParagragh>
            ))}
            <br />
        </div>
    );
}
